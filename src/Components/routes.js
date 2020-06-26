import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Example from "./Example";

export default (
  <BrowserRouter>
    
    <Route path="/example" exact component={Example} />
    
  </BrowserRouter>
);
