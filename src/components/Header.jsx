import React from "react";
import { Link, useHistory } from "react-router-dom";
import { withRouter } from "react-router";

import { AUTH_TOKEN } from "../constants";

function Header() {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const history = useHistory();

  return (
    <div className="flex column orange">
      <div className="fw7 mr1">Beautiful App's Link Aggregator</div>
      <div className="flex ">
        <Link to="/" className="ml1 no-underline black">
          City
        </Link>
        <div className="ml1">|</div>
        <Link to="/create" className="ml1 no-underline black">
          Rates
        </Link>
        <div className="ml1">|</div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                history.push(`/`);
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default withRouter(Header);
