import React from "react";
import { StatsInterface } from "./statsInterface";
import { currency } from "../../lib/currency";

export const Stats = ({ entries }: StatsInterface) => {
  const calculateRevenue = () =>
    entries.reduce((acc, event) => {
      return acc + event.ticketPrice.value;
    }, 0);

  const ticketCount = entries.length;

  const ticketRevenue = currency.format(calculateRevenue());

  const averageRevenue = currency.format(calculateRevenue() / ticketCount);

  return (
    <div>
      <p>
        Total ticket revenue: <b>{ticketRevenue}</b>
      </p>
      <p>
        Tickets sold: <b>{ticketCount}</b>
      </p>
      <p>
        Average ticket price: <b>{String(averageRevenue)}</b>
      </p>
    </div>
  );
};
