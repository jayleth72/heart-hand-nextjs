import React from "react";
import EventCalendar from "./EventCalendar";
import { Event } from "./constants/types";
import eventsData from "./data/events/events.json";

const CalendarPage: React.FC = () => {
  const events: Event[] = eventsData;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Event Calendar
      </h1>
      <EventCalendar events={events} />
    </div>
  );
};

export default CalendarPage;
