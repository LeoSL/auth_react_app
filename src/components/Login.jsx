import React, { useState } from "react";
import { gql } from "@apollo/client";
import { Mutation } from "@apollo/client/react/components";
import { useHistory } from "react-router-dom";

import { AUTH_TOKEN } from "../constants";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const history = useHistory();
  const initialState = {
    login: true, // switch between Login and SignUp
    email: "",
    password: "",
    name: "",
  };

  const [credentials, setCredentials] = useState(initialState);

  const { login, email, password, name } = credentials;

  const setCredState = (state) => setCredentials({ ...credentials, ...state });

  // eslint-disable-next-line no-unused-vars
  const saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  const confirm = async (data) => {
    const { token } = credentials.login ? data.login : data.signup;
    saveUserData(token);
    history.push(`/`);
  };

  return (
    <div>
      <h4 className="mv3">{login ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        {!login && (
          <input
            value={name}
            onChange={(e) => setCredState({ name: e.target.value })}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          onChange={(e) => setCredState({ email: e.target.value })}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={(e) => setCredState({ password: e.target.value })}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <Mutation
          mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
          variables={{ email, password, name }}
          onCompleted={(data) => confirm(data)}
        >
          {(mutation) => (
            <button className="pointer mr2 button" onClick={mutation}>
              {login ? "login" : "create account"}
            </button>
          )}
        </Mutation>

        <button
          className="pointer button"
          onClick={() => setCredState({ login: !login })}
        >
          {login ? "need to create an account?" : "already have an account?"}
        </button>
      </div>
    </div>
  );
};

export default Login;
