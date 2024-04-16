import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Watch from "./pages/watch.tsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import { AuthProvider } from 'react-auth-kit';

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducers, compose(applyMiddleware(thunk)))

root.render(
  <Provider store={store}>
      <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={false}>
      <Router history={browserHistory} routes={routes} />
      </AuthProvider>
  </Provider>,
  document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
