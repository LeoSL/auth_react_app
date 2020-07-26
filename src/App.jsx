import React from "react";

import Local from "./components/Local.jsx";
import ExchangeRates from "./components/ExchangeRates.jsx";
import pic from "../assets/42.jpg";

function App() {
  const title = "Beautiful App";

  return (
    <div>
      <img src={pic} alt="" />
      <h1>This is a {title}</h1>
      <h2>Life is good -- {40 + 2}</h2>
      <Local />
      ---
      <ExchangeRates />
    </div>
  );
}

export default App;
