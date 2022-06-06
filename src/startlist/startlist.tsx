import React, { useState, useEffect } from "react";
import axios from "axios";
import { Entry } from "./entry/entry";
import { Sorting } from "./sorting/sorting";
import { Filtering } from "./filtering/filtering";
import { Stats } from "./stats/stats";

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

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setFilters({ ...filters, [event.target.id]: event.target.value });

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSort(event.target.value);

  const handleOrder = () => setOrder(order === "asc" ? "desc" : "asc");

  const clearSort = () => {
    setSort("");
    setOrder("asc");
  };

  const clearFilters = () => {
    setFilters({});
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const position = order === "asc" ? -1 : 1;

  const entryValue = (entry: any) =>
    sort === "ticketPrice" ? entry[sort]["value"] : entry[sort];

  const filterEntries = !Object.keys(filters).length
    ? entries
    : [...entries].filter((entry) =>
        Object.keys(filters).every((key) => entry[key] === filters[key])
      );

  const sortEntries = (entryData: Array<any>) =>
    entryData.sort((a, b) =>
      entryValue(a) === entryValue(b)
        ? 0
        : entryValue(a) < entryValue(b)
        ? position
        : position * -1
    );

  const filteredAndSorted =
    !Object.keys(filters).length && !sort.length
      ? entries
      : sortEntries(filterEntries);

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
      <Filtering
        entries={entries}
        filters={filters}
        handleFilter={handleFilter}
        clearFilters={clearFilters}
      />
      <Stats entries={filteredAndSorted} />
      <div>
        {filteredAndSorted.map((entry, i) => (
          <div key={i}>
            <Entry entry={entry} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Startlist;
