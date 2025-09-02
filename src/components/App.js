import React from "react";
import "./../styles/App.css";

import Tooltip from "./Tooltip";
// import Form from "./Form";
// import FetchData from "./FetchData";
export default function App() {
  return (
    <div className="App">
      <Tooltip text={"Hover over me"}>
        <p>This is tooltip</p>
      </Tooltip>
    </div>
  );
}
