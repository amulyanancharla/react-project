import React from "react";
import {Grid} from "@material-ui/core";
import routes from "./Components/routes";

function App() {
  return(
    <Grid container justify='center'>
      {routes}
    </Grid>
  );
}

export default App;