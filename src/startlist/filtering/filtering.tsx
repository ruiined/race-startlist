import React from "react";
import { FilteringInterface } from "./filteringInterface";
import { EntryInterface } from "../entry/entryInterface";

export const Filtering = ({
  entries,
  filters,
  handleFilter,
  clearFilters,
}: FilteringInterface) => {
  const events = !Object.keys(filters).length
    ? [...new Set(entries.map((entry: EntryInterface) => entry.eventTitle))]
    : [
        ...new Set(
          // eslint-disable-next-line array-callback-return
          entries.map((entry: EntryInterface) => {
            if (entry.organiserTitle === filters.organiserTitle)
              return entry.eventTitle;
          })
        ),
      ];

  const organisers = [
    ...new Set(entries.map((entry: EntryInterface) => entry.organiserTitle)),
  ];
  return (
    <>
      <select
        value={filters.organiserTitle || "all"}
        onChange={handleFilter}
        aria-label="filter organisations"
        id="organiserTitle"
      >
        <option value="all" disabled>
          Organisers
        </option>
        {organisers.map((org, i) => (
          <option value={org} key={i}>
            {org}
          </option>
        ))}
      </select>
      <select
        value={filters.eventTitle || "all"}
        onChange={handleFilter}
        aria-label="filter events"
        id="eventTitle"
      >
        <option value="all" disabled>
          Events
        </option>
        {events.map((ev, i) => (
          <option value={ev} key={i}>
            {ev}
          </option>
        ))}
      </select>
      <button onClick={clearFilters}>Reset filters</button>
    </>
  );
};
