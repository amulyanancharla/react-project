
import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Logo from "./Components/Logo";
import Authbackground from "./Components/Authbackground";
import TextField from '@material-ui/core/TextField';


function Registrationform({handleSubmit, submitting}) {
  return (
    <Authbackground>
    <form onSubmit={handleSubmit}>
      <Paper style={{ padding : "2rem" }}>
        <Grid container spacing={2} direction="column"> 
          <Grid item>
            <Typography variant="h5" component="h4">
              Registration Process
            </Typography>
          </Grid>
          <Grid item container direction="row">
            <Grid sm={6}>
              
              <TextField id="Enter Full Name" label="Enter Full Name" variant="outlined" />
              <TextField id="Mobile Number" label="Mobile Number" variant="outlined" />
              <TextField id="Jurisdiction" label="Jurisdiction" variant="outlined" />
              <TextField id="Password" label="Password" variant="outlined" />
              <TextField id="ReEnter Password" label="ReEnter Password" variant="outlined" />

            </Grid>
            <Grid sm={6}>
              <Logo />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              // disabled={submitting || pristine || invalid}
            >
              submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
    </Authbackground> 

  );
}
export default Registrationform;


