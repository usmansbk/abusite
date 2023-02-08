import React from 'react';
import {EditEventInput} from '~graphql/__generated__/graphql';
import Agenda from './Agenda';

interface Props {
  events: EditEventInput[];
}

export default function TimetableCalendar({events}: Props) {
  return <Agenda events={events} />;
}
