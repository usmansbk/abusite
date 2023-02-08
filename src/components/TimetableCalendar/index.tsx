import React from 'react';
import {Event} from '~graphql/__generated__/graphql';
import Agenda from './Agenda';

interface Props {
  events: Event[];
}

export default function TimetableCalendar({events}: Props) {
  return <Agenda events={events} />;
}
