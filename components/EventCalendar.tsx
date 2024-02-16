import React from "react";
import { Event } from "./constants/types";
import Link from "next/link";
import Image from "next/image";

interface Props {
  events: Event[];
}

const EventCalendar: React.FC<Props> = ({ events }) => {
  // Define an array of background colors
  const colors = [
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-pink-200",
    "bg-purple-200",
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {events.map((event, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
        >
          {/* Use modular arithmetic to cycle through colors */}
          <div className={`rounded-md p-4 ${colors[index % colors.length]}`}>
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date}</p>
            <p className="mt-2">{event.description}</p>
            {/* {event.imageLink && (
              <Image
                src={event.imageLink}
                alt={event.title}
                width={100}
                height={100}
                className="mt-4 mx-auto max-w-full h-auto"
              />
            )} */}
            {event.link && (
              <Link
                href={event.link}
                className="block mt-2 text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Details
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCalendar;
