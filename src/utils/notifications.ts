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

      const fireDate = getNextDay(mergeDateTime(startDate, startTime), repeat);

      if (fireDate) {
        notifee.createTriggerNotification(
          {
            title,
            android,
            body: startTime ? formatTime(startTime) : undefined,
          },
          {
            type: TriggerType.TIMESTAMP,
            timestamp: fireDate.toDate().getTime(),
            repeatFrequency: getFrequency(event.repeat),
            alarmManager,
          },
        );

        Object.keys(defaultReminders).forEach(minutes => {
          if (defaultReminders[minutes as keyof DefaultReminders]) {
            const reminderFireDate = getNextDay(
              fireDate.subtract(Number.parseInt(minutes, 10), 'minutes'),
              repeat,
            );

            if (reminderFireDate) {
              notifee.createTriggerNotification(
                {
                  title,
                  android,
                  body: capitalize(fireDate.from(reminderFireDate)),
                },
                {
                  type: TriggerType.TIMESTAMP,
                  timestamp: reminderFireDate.toDate().getTime(),
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
