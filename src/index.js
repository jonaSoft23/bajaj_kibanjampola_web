import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from "@apollo/react-hooks";

import App from './App';

//utils
import client from "./Utils/ApolloClient";

// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <ApolloProvider client={client}>
            <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
