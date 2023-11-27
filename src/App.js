import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div></div>
      <Weather />
      <footer>
        This project was coded by Anzhelika Shleiko and is{""}
        <a
          href="https://weather-app-with-shecodes.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {""}open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
