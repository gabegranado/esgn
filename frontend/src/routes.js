import React from "react";
import { Route } from "react-router-dom";

import App from "./App";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={SignupPage} />
    <Route path="Login" component={LoginPage} />
  </Route>
);
