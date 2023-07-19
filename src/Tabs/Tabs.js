import React, { useState } from "react";
import "./Tabs.css";

const content = [
  [
    "React is extremly popular",
    "It makes building complex, interactive UI's a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic Rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Html , scss",
    "Dynamic data and API integration",
    "Don't Quit",
    "Always demand impossible",
  ],
];

export default function Tabs() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="tabs-wrapper">
      <header className="logo-text-wrapper">
        <div>
          <img className="react-logo" src="logo192.png" alt="React Logo" />
        </div>
        <div>
          <div className="tabs-heading">React.js</div>
          <div className="tabs-para">
            i.e., Using the React library for rendering UI
          </div>
        </div>
      </header>
      <div id="tabs">
        <menu className="button-wrapper">
          <button
            className={activeContentIndex === 0 ? "active" : "not-active"}
            onClick={() => setActiveContentIndex(0)}
          >
            WHY REACT?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : "not-active"}
            onClick={() => setActiveContentIndex(1)}
          >
            CORE FEATURES
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : "not-active"}
            onClick={() => setActiveContentIndex(2)}
          >
            RELATED RESOURCE
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : "not-active"}
            onClick={() => setActiveContentIndex(3)}
          >
            MY GOAL
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item} className="list-items">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
