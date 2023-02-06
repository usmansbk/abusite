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

export function getNextDay(
  day: dayjs.Dayjs,
  repeat?: RepeatFrequency | null,
): dayjs.Dayjs {
  const dtstart = day.utc().toDate();

  let rule: RRule;
  if (repeat) {
    rule = new RRule({
      dtstart,
      freq: getFrequency(repeat),
    });
  } else {
    rule = new RRule({
      dtstart,
      until: dtstart,
      freq: Frequency.DAILY,
    });
  }

  const nextDate = rule.after(dayjs().utc().toDate(), true);

  return nextDate && dayjs.utc(nextDate).local();
}
