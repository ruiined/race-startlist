/* eslint-disable array-callback-return */
import React from "react";
import { FilteringInterface } from "./filteringInterface";

export const Filtering = ({
  entries,
  filters,
  handleFilter,
  clearFilters,
}: FilteringInterface) => {
  const filterOptions = (filterBy: string, filtered: string) =>
    [
      ...new Set(
        entries.map((entry: any) => {
          if (!filters[filtered] || entry[filtered] === filters[filtered])
            return entry[filterBy];
        })
      ),
    ].filter((e) => e);

  const organisers = filterOptions("organiserTitle", "eventTitle");

  const events = filterOptions("eventTitle", "organiserTitle");

  return (
    <div id="filtering">
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
      <button aria-label="reset filters" onClick={clearFilters}>
        Reset
      </button>
    </div>
  );
};
