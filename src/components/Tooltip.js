import { useState } from "react";
import React from "react";
import "./toolTip.css";
export default function Tooltip({ text, children }) {
  const [visible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ backgroundColor: "red" }}
    >
      {text}
      <div
        className={`tooltiptext ${visible ? "" : "unhide"}`}
        style={{ backgroundColor: "blue", padding: "20px" }}
      >
        {children}
      </div>
    </div>
  );
}
