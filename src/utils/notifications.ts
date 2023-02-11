import notifee, {
  AndroidCategory,
  AndroidImportance,
  RepeatFrequency,
  TriggerType,
} from '@notifee/react-native';
import capitalize from 'lodash.capitalize';
import {
  Event,
  RepeatFrequency as RepeatFrequencyT,
} from '~graphql/__generated__/graphql';
import {DefaultReminders} from '~types';
import {formatDuration, formatTime, mergeDateTime} from './dateTime';
import {getNextDay} from './recurrence';

interface ConfigOptions {
  mute: boolean;
  defaultReminders: DefaultReminders;
  reminders: {[key: string]: DefaultReminders};
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
  events: Event[],
  {defaultReminders, mute, reminders}: ConfigOptions,
) {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Timetable',
  });

  await notifee.cancelAllNotifications();

  if (mute) {
    return;
  }

  events.forEach(event => {
    const {title, id, startDate, startTime, repeat, isAllCancelled} = event;

    if (isAllCancelled) {
      return;
    }

    const eventDate = mergeDateTime(startDate, startTime);

    if (!eventDate) {
      return;
    }

    const eventReminder = {...defaultReminders, ...reminders[id!]};
    Object.keys(eventReminder).forEach(minutes => {
      if (eventReminder[minutes as keyof DefaultReminders]) {
        const timeInMinutes = Number.parseInt(minutes, 10);

        const fireDate = getNextDay(
          eventDate.subtract(timeInMinutes, 'minutes'),
          repeat,
        );

        if (!fireDate) {
          return;
        }

        let body;

        if (timeInMinutes === 0) {
          body = startTime ? formatTime(startTime) : undefined;
        } else {
          body = capitalize(formatDuration(timeInMinutes));
        }

        notifee.createTriggerNotification(
          {
            title,
            body,
            android: {
              channelId,
              groupId: id!,
              category:
                timeInMinutes === 0
                  ? AndroidCategory.ALARM
                  : AndroidCategory.REMINDER,
              importance:
                timeInMinutes === 0
                  ? AndroidImportance.HIGH
                  : AndroidImportance.DEFAULT,
              pressAction: {
                id: 'default',
              },
              fullScreenAction:
                timeInMinutes === 0
                  ? {
                      id: 'default',
                    }
                  : undefined,
            },
          },
          {
            type: TriggerType.TIMESTAMP,
            timestamp: fireDate.unix() * 1000,
            repeatFrequency: getFrequency(event.repeat),
            alarmManager: {
              allowWhileIdle: true,
            },
          },
        );
      }
    });
  });
}
