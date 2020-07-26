import React, { useState } from "react";
import { AUTH_TOKEN } from "../constants";

const Login = () => {
  const initialState = {
    login: true, // switch between Login and SignUp
    email: "",
    password: "",
    name: "",
  };

  const [credentials, setCredentials] = useState(initialState);

  const { login, email, password, name } = credentials;

  const setState = (state) => setCredentials({ ...credentials, ...state });

  const confirm = async () => {};

  // eslint-disable-next-line no-unused-vars
  const saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  return (
    <div>
      <h4 className="mv3">{login ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        {!login && (
          <input
            value={name}
            onChange={(e) => setState({ name: e.target.value })}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          onChange={(e) => setState({ email: e.target.value })}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={(e) => setState({ password: e.target.value })}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <div className="pointer mr2 button" onClick={() => confirm()}>
          {login ? "login" : "create account"}
        </div>
        <div
          className="pointer button"
          onClick={() => setState({ login: !login })}
        >
          {login ? "need to create an account?" : "already have an account?"}
        </div>
      </div>
    </div>
  );
};

export default Login;
