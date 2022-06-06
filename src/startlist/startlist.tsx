import React, { useState, useEffect } from "react";
import axios from "axios";
import { Entry } from "./entry/entry";

const Startlist = () => {
  const [entries, setEntries] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  const loadEntries = () => {
    axios
      .get("/api/entries")
      .then((res) => {
        setEntries(res.data);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    loadEntries();
  }, []);

  if (!entries) return <h2>No entries</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>All events</h2>
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
