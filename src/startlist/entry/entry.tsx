import React, { useState } from "react";
import moment from "moment";
import { EntryInterface } from "./entryInterface";

export const Entry = ({ entry }: EntryInterface) => {
  const [fullView, setFullView] = useState<boolean>(false);

  const handleClick = () => {
    fullView ? setFullView(false) : setFullView(true);
  };
  return (
    <div onClick={handleClick}>
      <div id="min-entry">
        <span>{entry.status}</span>
        <span>
          {entry.firstName} {entry.lastName}
        </span>
        <span className="email">{entry.emailAddress}</span>
        <span>
          {entry.ticketTitle} ({entry.ticketPrice.value}
          {entry.ticketPrice.currencyCode})
        </span>
      </div>

      {fullView && (
        <div id="detailed-entry">
          <p>
            <b>{entry.eventTitle}</b>
          </p>
          <p>
            <i>{entry.raceTitle}</i>
          </p>
          <p>{moment(entry.raceStartDate).format("MMMM Do YYYY h:mm a")}</p>
          <p>Organised by {entry.organiserTitle}</p>
          <p>Booked on {moment(entry.bookingDate).format("MMMM Do YYYY")}</p>
        </div>
      )}
    </div>
  );
};
