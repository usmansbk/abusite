import {Frequency, RRule} from 'rrule';
import {RepeatFrequency} from '~graphql/__generated__/graphql';
import dayjs from './dateTime';

export const getFrequency = (repeat: RepeatFrequency | undefined | null) => {
  switch (repeat) {
    case RepeatFrequency.Daily:
      return RRule.DAILY;
    case RepeatFrequency.Weekly:
      return RRule.WEEKLY;
    default:
      return undefined;
  }
};

function createRule(dtstart: Date, repeat: RepeatFrequency | undefined | null) {
  if (repeat) {
    return new RRule({
      dtstart,
      freq: getFrequency(repeat),
    });
  }
  return new RRule({
    dtstart,
    until: dtstart,
    freq: Frequency.DAILY,
  });
}

export function getNextDay(
  day: dayjs.Dayjs,
  repeat?: RepeatFrequency | null,
): dayjs.Dayjs {
  const dtstart = day.utc().toDate();

  const rule = createRule(dtstart, repeat);

  const nextDate = rule.after(dayjs().utc().toDate(), true);

  return nextDate && dayjs.utc(nextDate).local();
}
