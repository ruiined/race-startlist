import React from "react";
import { StatsInterface } from "./statsInterface";
import { currency } from "../../lib/currency";

export const Stats = ({ entries }: StatsInterface) => {
  const calculateRevenue = () =>
    entries.reduce((acc, event) => {
      return acc + event.ticketPrice.value;
    }, 0);

  const ticketRevenue = currency.format(calculateRevenue());
  const averageRevenue = currency.format(calculateRevenue() / entries.length);
  return (
    <div>
      <p>
        Total ticket revenue: <b>{ticketRevenue}</b>
      </p>
      <p>
        Average ticket price: <b>{averageRevenue}</b>
      </p>
    </div>
  );
};
