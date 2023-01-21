import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import calendar from 'dayjs/plugin/calendar';
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(calendar);
dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isYesterday);

export const TIME_FORMAT = 'HH:mm';

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
  return dayjs(time, TIME_FORMAT).format('hh:mm A');
}

export function formatCalendarDate(date: string | null) {
  return dayjs(date).calendar(null, {
    sameDay: '[Today], dddd DD',
    nextDay: '[Tomorrow], dddd DD',
    nextWeek: 'dddd, DD MMM',
    lastDay: '[Yesterday], dddd DD',
    lastWeek: '[Last] dddd, DD MMM',
    sameElse: 'dddd, DD MMM YYYY',
  });
}

export function formatDateToTime(date: Date) {
  return dayjs(date).format(TIME_FORMAT);
}

export default dayjs;
