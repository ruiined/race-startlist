import React from "react";
import { SortingInterface } from "./sortingInterface";

export const Sorting = ({
  sort,
  handleSort,
  handleOrder,
  order,
  clearSort
}: SortingInterface) => {
  return <div id="sorting">
      <select defaultValue={sort || "all"} onChange={handleSort} name="sort" id="sort">
        <option value="all" disabled>Sort by</option>
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
        <button onClick={handleOrder}>{order === "asc" ? "⬆️" : "⬇️"}</button>
      </p>
      <p>
        <button onClick={clearSort}>Reset sorting</button>
      </p>
      </div>;
}
  