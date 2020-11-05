import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="new york" />
        <footer>
          this project was coded by michelle chung and is{" "}
          <a
            href="https://github.com/hiimeems/react-weather-app-shecodes"
            target="_blank"
          >
            open-sourced{" "}
          </a>
          on Github
        </footer>
      </div>
    </div>
  );
}
