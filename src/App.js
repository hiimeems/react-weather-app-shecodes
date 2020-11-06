import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="new york" />
        <footer>
          coded by{" "}
          <a href="https://www.linkedin.com/in/michelle-chung-042b3a13b">
            michelle chung
          </a>
          , is{" "}
          <a
            href="https://github.com/hiimeems/react-weather-app-shecodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
          , and hosted on{" "}
          <a href="https://loving-jackson-082d41.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
