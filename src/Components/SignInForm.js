import React from 'react'; 
import { Button, Grid, Paper, Typography } from "@material-ui/core";

import Authbackground  from "./Authbackground";

function Signinform({ handleSubmit, submitting, pristine, invalid }) {
  return (
    <Authbackground>
      <form onSubmit={handleSubmit}>
        <Grid container justify="center">
          <Grid item xs={10}> 
            <Paper style={{ padding: "2rem"}}>
              <Grid container spacing={6}>
                <Grid container item xs={7} spacing={4} direction="column">
                  <Grid item>
                    <Typography variant="h5" component="h4">
                     Login
                    </Typography>
                  </Grid>
                  <Grid item container spacing={2} direction="column" >
                    <Grid item>
                      <Typography variant="body1">abcd@gmail.com</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="pass">Password:</Typography>
                      <input type="password" name="password" value="" required></input>
                    </Grid>
                  </Grid>
                  <Grid item container justify="space-between">
                    <Button 
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      login
                    </Button>

                    <Button
                      color="primary"
                      type="submit"
                      // disabled={submitting || pristine || invalid}
                    >
                      Forgot Password
                    </Button>
                  </Grid>
                </Grid>
                <Grid container xs={5} direction="column" justify="center">
                  <Grid item>
                    <Typography variant="caption">
                      Gang Tracking System for
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="h6">
                      Santa Monica Police Department, California
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </Authbackground>

  );
}

export default Signinform;
