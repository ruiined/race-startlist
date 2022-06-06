import React from "react";
import Startlist from "./startlist/startlist"

function App() {
  return (
    <div>
      <header>
        <h1>
          <a href="/">Let's do this</a>
        </h1>
      </header>
      <main>
        <Startlist />
      </main>
      <footer>
        <a
          href="https://github.com/ruiined/race-startlist"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </footer>
    </div>
  );
}

export default App;
