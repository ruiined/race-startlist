import React, { useState, useEffect } from "react";
import axios from "axios";

const Startlist = () => {
  const [events, setEvents] = useState<any[]>([]);

  const loadEvents = () => {
    axios.get("/api/entries").then((res) => {
      setEvents(res.data);
    });
  };

  useEffect(() => {
    loadEvents();
  }, []);

  if (!events) return <h2>No events</h2>;
  return (
    <div>
      <h2>Startlist</h2>
      <div>
        {events.map((entry) => (
          <p>{entry.firstName}</p>
        ))}
      </div>
    </div>
  );
};

export default Startlist;
