import notifee, {RepeatFrequency, TriggerType} from '@notifee/react-native';
import capitalize from 'lodash.capitalize';
import {
  EditEventInput,
  RepeatFrequency as RepeatFrequencyT,
} from '~graphql/__generated__/graphql';
import {DefaultReminders} from '~types';
import {formatTime, mergeDateTime} from './dateTime';
import {getNextDay} from './recurrence';

interface ConfigOptions {
  mute: boolean;
  defaultReminders: DefaultReminders;
}

const getFrequency = (repeat: RepeatFrequencyT | undefined | null) => {
  switch (repeat) {
    case RepeatFrequencyT.Daily:
      return RepeatFrequency.DAILY;
    case RepeatFrequencyT.Weekly:
      return RepeatFrequency.WEEKLY;
    default:
      return undefined;
  }
};

export default async function scheduleReminders(
  events: EditEventInput[],
  {defaultReminders, mute}: ConfigOptions,
) {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Timetable',
    vibration: true,
  });

  await notifee.cancelAllNotifications();
  if (!mute) {
    events.forEach(event => {
      const {title, id, startDate, startTime, repeat} = event;

      const eventDate = mergeDateTime(startDate, startTime);

      if (eventDate) {
        Object.keys(defaultReminders).forEach(minutes => {
          if (defaultReminders[minutes as keyof DefaultReminders]) {
            const timeInMinutes = Number.parseInt(minutes, 10);

            const fireDate = getNextDay(
              eventDate.subtract(timeInMinutes, 'minutes'),
              repeat,
            );

            if (fireDate) {
              let body;

              if (timeInMinutes === 0) {
                body = startTime ? formatTime(startTime) : undefined;
              } else {
                body = capitalize(eventDate.from(fireDate));
              }

              notifee.createTriggerNotification(
                {
                  title,
                  body,
                  android: {
                    channelId,
                    groupId: id!,
                    pressAction: {
                      id: 'default',
                    },
                  },
                },
                {
                  type: TriggerType.TIMESTAMP,
                  timestamp: fireDate.toDate().getTime(),
                  repeatFrequency: getFrequency(event.repeat),
                  alarmManager: {
                    allowWhileIdle: true,
                  },
                },
              );
            }
          }
        });
      }
    });
  }
}
