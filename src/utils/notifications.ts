import notifee, {
  NotificationAndroid,
  RepeatFrequency,
  TimestampTriggerAlarmManager,
  TriggerType,
} from '@notifee/react-native';
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

notifee.onBackgroundEvent(async ({detail}) => {
  const {notification} = detail;
  if (notification) {
    await notifee.cancelNotification(notification.id!);
  }
});

export default async function scheduleReminders(
  events: EditEventInput[],
  {defaultReminders, mute}: ConfigOptions,
) {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Timetable',
  });
  await notifee.cancelAllNotifications();
  if (!mute) {
    events.forEach(event => {
      const {title, id, startDate, startTime, repeat} = event;
      const android: NotificationAndroid = {
        channelId,
        groupId: id!,
      };
      const alarmManager: TimestampTriggerAlarmManager = {
        allowWhileIdle: true,
      };

      const eventDate = getNextDay(mergeDateTime(startDate, startTime), repeat);

      if (eventDate) {
        Object.keys(defaultReminders).forEach(minutes => {
          if (defaultReminders[minutes as keyof DefaultReminders]) {
            const timeInMinutes = Number.parseInt(minutes, 10);

            const fireDate = getNextDay(
              eventDate.subtract(timeInMinutes, 'minutes'),
              repeat,
            );

            let body;

            if (timeInMinutes === 0) {
              body = startTime ? formatTime(startTime) : undefined;
            } else {
              body = capitalize(eventDate.from(fireDate));
            }

            if (fireDate) {
              notifee.createTriggerNotification(
                {
                  title,
                  body,
                  android,
                },
                {
                  type: TriggerType.TIMESTAMP,
                  timestamp: fireDate.toDate().getTime(),
                  repeatFrequency: getFrequency(event.repeat),
                  alarmManager,
                },
              );
            }
          }
        });
      }
    });
  }
}
