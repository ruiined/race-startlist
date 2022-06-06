import React, { useState } from "react";
import { EntryInterface } from "./entryInterface";

export const Entry = ({ entry }: EntryInterface) => {
  const [fullView, setFullView] = useState<boolean>(false);

  const handleClick = () => {
    fullView ? setFullView(false) : setFullView(true);
  };
  return (
    <div onClick={handleClick}>
      {fullView ? (
        <div id="detailed-entry">
          <p>Status: {entry.status}</p>
          <p>
            {entry.firstName} {entry.lastName}
          </p>
          <p>{entry.emailAddress}</p>
          <p>{entry.eventTitle}</p>
          <p>{entry.raceStartDate}</p>
          <p>{entry.raceTitle}</p>
          <p>Organised by {entry.organiserTitle}</p>
          <p>Booking details:</p>
          <p>Booked on {entry.bookingDate}</p>
          <p>Ticket:</p>
          <p>{entry.ticketTitle}</p>
          <p>
            {entry.ticketPrice.value} {entry.ticketPrice.currencyCode}
          </p>
          <p>
            {entry.ticketPrice.fee} {entry.ticketPrice.currencyCode} fee
          </p>
        </div>
      ) : (
        <div id="min-entry">
          <span>{entry.status}</span>
          <span>
            {entry.firstName} {entry.lastName}
          </span>
          <span className="email">{entry.emailAddress}</span>
          <span>
            {entry.ticketTitle} ({entry.ticketPrice.value}+
            {entry.ticketPrice.fee} {entry.ticketPrice.currencyCode})
          </span>
        </div>
      )}
    </div>
  );
};
