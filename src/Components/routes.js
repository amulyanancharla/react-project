import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Example from "./auth/Example";
import RegistrationForm from "./auth/RegistrationForm";
import SignInForm from "./auth/SignInForm";
import NewSignInPage from "./auth/NewSignInPage";
import NewRegistrationForm from "./auth/NewRegistrationForm";
import ForgotPassword from "./auth/ForgotPassword";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/example" exact component={Example} />
      <Route path="/" exact component={RegistrationForm} />
      <Route path="/signin" exact component={SignInForm} />
      <Route path="/signin2" exact component={NewSignInPage} />
      <Route path="/signup2" exact component={NewRegistrationForm} />
      <Route path="/forgot_password" exact component={ForgotPassword} />
    </Switch>
    
  </BrowserRouter>
);
