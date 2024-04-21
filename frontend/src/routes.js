import React from "react";
import { Route } from "react-router-dom";

import App from "./App";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Watch from "./pages/watch.tsx";
import Home from "./pages/Home.jsx";
import SingleWatch from "./pages/SingleWatch";

export default (
  <Route path="/" component={App}>
    <Route path="/signup" component={SignupPage} />
    <Route path="/Login" component={LoginPage} />
    <Route path="/Watch" component={Watch} />
    <Route path="/Home" component={Home} />
    <Route path="/watch" component={SingleWatch} />

  </Route>
);
