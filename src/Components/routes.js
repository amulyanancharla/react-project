import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Example from "./Example";
import RegistrationForm from "./RegistrationForm";
import SignInForm from "./SignInForm";
import NewSignInPage from "./NewSignInPage";
import NewRegistrationForm from "./NewRegistrationForm";
import ForgotPassword from "./ForgotPassword";

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
