import {EditEventInput, Event} from '~graphql/__generated__/graphql';
import {formatTime} from './dateTime';

export function formatEventTime(startTime: string, endTime: string) {
  if (!startTime) {
    return null;
  }

  if (startTime && endTime) {
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  }

  return formatTime(startTime);
}

export function byTime(a: Event | EditEventInput, b: Event | EditEventInput) {
  if (a.startTime && b.startTime) {
    return a.startTime.localeCompare(b.startTime);
  }

  if (!(a.startTime || b.startTime)) {
    return 0;
  }

  return !a.startTime ? -1 : 0;
}
