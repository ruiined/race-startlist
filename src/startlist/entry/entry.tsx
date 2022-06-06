import React, { useState } from "react";
import moment from "moment";
import { EntriesInterface } from "./entryInterface";
import { currency } from "../../lib/currency";

export const Entry = ({ entry, filters }: EntriesInterface) => {
  const [fullView, setFullView] = useState<boolean>(false);

  const handleView = () => {
    fullView ? setFullView(false) : setFullView(true);
  };
  return (
    <div>
      <div id="min-entry" onClick={handleView}>
        <span>{entry.status === "CONFIRMED" ? "✅" : "⌛"}</span>
        <span>
          {entry.firstName} {entry.lastName}
        </span>
        <span className="email">{entry.emailAddress}</span>
        {!filters.eventTitle && (
          <>
            <span>{entry.eventTitle}</span>
            <span>{moment(entry.raceStartDate).format("D/MM/YYYY h:mm")}</span>
          </>
        )}
        <span>
          {currency.format(entry.ticketPrice.value)}{" "}
          <span className="email">({entry.ticketTitle})</span>
        </span>
      </div>

      {fullView && (
        <div id="detailed-entry">
          {filters.eventTitle && (
            <>
              <p>
                <b>{entry.eventTitle}</b>
              </p>
              <p>{moment(entry.raceStartDate).format("MMMM Do YYYY h:mm a")}</p>
            </>
          )}
          <p>
            <i>{entry.raceTitle}</i>
          </p>
          <p>Organised by {entry.organiserTitle}</p>
          <p>Booked on {moment(entry.bookingDate).format("MMMM Do YYYY")}</p>
        </div>
      )}
    </div>
  );
};
