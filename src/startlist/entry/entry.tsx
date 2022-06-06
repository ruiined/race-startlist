import { EntryInterface } from "./entryInterface";

export const Entry = ({ entry }: EntryInterface) => {
  return (
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
  );
};