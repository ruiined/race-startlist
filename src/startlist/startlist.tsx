import React, { useState, useEffect } from "react";
import axios from "axios";
import { Entry } from "./entry/entry";

const Startlist = () => {
  const [entries, setEntries] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [sort, setSort] = useState<string>("firstName");
  const [order, setOrder] = useState<string>("Ascending");

  const loadEntries = () => {
    axios
      .get("/api/entries")
      .then((res) => {
        setEntries(res.data);
      })
      .catch((error) => setError(error.message));
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
    console.log(event.target.value);
  };

  const handleOrder = () => {
    order === "Ascending" ? setOrder("Descending") : setOrder("Ascending");
  };

  const clearSort = () => {
    setSort("firstName");
    setOrder("Ascending");
  };


  useEffect(() => {
    loadEntries();
  }, []);

  if (!entries) return <h2>No entries</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>All events</h2>
      <label htmlFor="sort">Sort by: </label>
      <select defaultValue={sort} onChange={handleSort} name="sort" id="sort">
        <option value="eventTitle">Event</option>
        <option value="raceTitle">Event Type</option>
        <option value="raceStartDate">Event Start Time</option>
        <option value="organiserTitle">Organisation</option>
        <option value="status">Status</option>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="emailAddress">Email</option>
        <option value="ticketTitle">Entry Type</option>
        <option value="ticketPrice">Ticket Price</option>
        <option value="bookingDate">Booking Date</option>
      </select>
      <p>
        Order: <button onClick={handleOrder}>{order}</button>
      </p>
      <p>
        <button onClick={clearSort}>Reset sorting</button>
      </p>
      <div>
        {entries.map((entry, i) => (
          <div key={i}>
            <Entry entry={entry} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Startlist;
