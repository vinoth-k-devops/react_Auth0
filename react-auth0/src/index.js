import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './Auth';

const auth = new Auth();

const root = ReactDOM.createRoot(document.getElementById('root'));
let state = {};
window.setState = (changes) => {
  state = Object.assign({}, state, changes);

  root.render(
    <React.StrictMode>
      <App user = {state} />
    </React.StrictMode>
  );
};

/* eslint no-restricted-globals: 0 */
let initialState = {
  name : "Vinoth Kumar Ganesan",
  navigation : location.pathname.replace(/^\/?|\/$/g, ""),
  auth: auth
};

window.setState(initialState);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
