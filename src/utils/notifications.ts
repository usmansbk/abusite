import notifee, {
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import {
  EditEventInput,
  RepeatFrequency as RepeatFrequencyT,
} from '~graphql/__generated__/graphql';
import {DefaultReminders} from '~types';
import {getTimestamp} from './dateTime';

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
    events.flatMap(event => {
      console.log(event, defaultReminders);
      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: getTimestamp(event.startDate, event.startTime),
        repeatFrequency: getFrequency(event.repeat),
        alarmManager: {
          allowWhileIdle: true,
        },
      };

      return notifee.createTriggerNotification(
        {
          title: event.title,
          body: 'Hello',
          android: {
            channelId,
          },
        },
        trigger,
      );
    });
  }
}
