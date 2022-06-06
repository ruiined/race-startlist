import React, { useState, useEffect } from "react";
import axios from "axios";
import { Entry } from "./entry/entry";
import { Sorting } from "./sorting/sorting";

const Startlist = () => {
  const [entries, setEntries] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [order, setOrder] = useState<string>("asc");
  const [filters, setFilters] = useState<any>({});

  const loadEntries = () => {
    axios
      .get("/api/entries")
      .then((res) => {
        setEntries(res.data);
      })
      .catch((error) => setError(error.message));
  };

  const handleOrgFilter = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setFilters({ ...filters, organiserTitle: event.target.value });

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSort(event.target.value);

  const handleOrder = () => setOrder(order === "asc" ? "desc" : "asc");

  const clearSort = () => {
    setSort("");
    setOrder("asc");
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const position = order === "asc" ? -1 : 1;

  const sortedEntries = !sort.length
    ? entries
    : entries
        .slice()
        .sort((a, b) =>
          a[sort] === b[sort] ? 0 : a[sort] < b[sort] ? position : position * -1
        );

  const filteredEntries = !filters.organiserTitle
    ? entries
    : entries
        .slice()
        .filter((entry) => entry.organiserTitle === filters.organiserTitle);

  const organisers = [...new Set(entries.map((entry) => entry.organiserTitle))];

  if (!entries) return <h2>No entries</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>All events</h2>
      <Sorting
        sort={sort}
        handleSort={handleSort}
        handleOrder={handleOrder}
        order={order}
        clearSort={clearSort}
      />
      <select onChange={handleOrgFilter} name="filter" id="filter">
        {organisers.map((org, i) => (
          <option value={org} key={i}>
            {org}
          </option>
        ))}
      </select>
      <div>
        {filteredEntries.map((entry, i) => (
          <div key={i}>
            <Entry entry={entry} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Startlist;
