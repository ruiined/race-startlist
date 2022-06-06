import React, { useState, useEffect } from "react";
import axios from "axios";

const Startlist = () => {
  const [entries, setEntries] = useState<any[]>([]);

  const loadEntries = () => {
    axios
      .get("/api/entries")
      .then((res) => {
        setEntries(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadEntries();
  }, []);

  if (!entries) return <h2>No entries</h2>;
  
  return (
    <div>
      <h2>Startlist</h2>
      <div>
        {entries.map((entry) => (
          <div>
            <p>Status: {entry.status}</p>
            <p>
              {entry.firstName} {entry.firstName}
            </p>
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
        ))}
      </div>
    </div>
  );
};

export default Startlist;
