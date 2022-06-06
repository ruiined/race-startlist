import React, { useState, useEffect } from "react";
import axios from "axios";
import { Entry } from "./entry/entry";
import { Sorting } from "./sorting/sorting";

const Startlist = () => {
  const [entries, setEntries] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [order, setOrder] = useState<string>("asc");

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
  };

  const handleOrder = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const clearSort = () => {
    setSort("");
    setOrder("asc");
  };

  useEffect(() => {
    loadEntries();
  }, []);

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
