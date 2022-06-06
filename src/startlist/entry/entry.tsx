import React, { useState } from "react";
import moment from "moment";
import { EntryInterface } from "./entryInterface";
import { currency } from "../../lib/currency";

export const Entry = ({ entry }: EntryInterface) => {
  const [fullView, setFullView] = useState<boolean>(false);

  const handleClick = () => {
    fullView ? setFullView(false) : setFullView(true);
  };
  return (
    <div>
      <div id="min-entry" onClick={handleClick}>
        <span>{entry.status === "CONFIRMED" ? "✅" : "⌛"}</span>
        <span>
          {entry.firstName} {entry.lastName}
        </span>
        <span className="email">{entry.emailAddress}</span>
        <span>
          {currency.format(entry.ticketPrice.value)}{" "}
          <span className="email">({entry.ticketTitle})</span>
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
