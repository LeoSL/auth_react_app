import React from "react";
import { Switch, Route } from "react-router-dom";

import pic from "../assets/42.jpg";
import Local from "./components/Local.jsx";
import ExchangeRates from "./components/ExchangeRates";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <img src={pic} alt="" />
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={Local} />
          <Route exact path="/create" component={ExchangeRates} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      <h2>Life is good -- {40 + 2}</h2>
    </div>
  );
}

export default App;
