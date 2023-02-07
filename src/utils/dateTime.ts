import RNLocalize from 'react-native-localize';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import calendar from 'dayjs/plugin/calendar';
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(calendar);
dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isYesterday);

export const TIME_FORMAT = 'HH:mm';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const TIME_12H_FORMAT = 'hh:mm A';
export const TIME_24H_FORMAT = 'HH:mm';

export function getCurrentDate() {
  return dayjs().toDate();
}

export function getCurrentTime() {
  return dayjs().format(TIME_FORMAT);
}

export function parseDate(date: string) {
  return dayjs(date).toDate();
}

export function parseTime(time: string) {
  return dayjs(time, TIME_FORMAT).toDate();
}

export function formatTime(time: string | null) {
  return dayjs(time, TIME_FORMAT).format(
    RNLocalize.uses24HourClock() ? TIME_24H_FORMAT : TIME_12H_FORMAT,
  );
}

export function formatCalendarDate(date: string | null) {
  return dayjs(date).calendar(null, {
    sameDay: 'dddd DD',
    nextDay: 'dddd DD',
    nextWeek: 'dddd, DD MMM',
    lastDay: 'dddd DD',
    lastWeek: 'dddd, DD MMM',
    sameElse: 'dddd, DD MMM YYYY',
  });
}

export function formatDateToTime(date: Date) {
  return dayjs(date).format(TIME_FORMAT);
}

export function transformDate(date: Date) {
  return dayjs(date).format(DATE_FORMAT);
}

export function transformTime(date: Date) {
  return dayjs(date).format(TIME_FORMAT);
}

export function mergeDateTime(date: Date, time?: string) {
  let day = dayjs(date, DATE_FORMAT);

  if (time) {
    const dayTime = dayjs(time, TIME_FORMAT);

    day = day.hour(dayTime.hour()).minute(dayTime.minute());
  }

  return day;
}

export default dayjs;
