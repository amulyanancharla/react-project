import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Example from "./Example";
import RegistrationForm from "./RegistrationForm";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/example" exact component={Example} />
      <Route path="/" exact component={RegistrationForm} />
    </Switch>
    
  </BrowserRouter>
);
