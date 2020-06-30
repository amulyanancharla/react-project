import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Logo from "./Logo";
import TextField from "@material-ui/core/TextField";

function ForgotPassword() {
	return (
		<Grid container>
		  <Grid item xs={12} container style={{backgroundColor: "blue", height: "15rem"}} alignItems="center" justify="center">
		    <Logo />
		  </Grid>
		  <Grid container justify="center" style={{backgroundColor: "#33b2ff", height: "4rem"}}>
		    <Grid item xs={6}>
		      <Paper style={{padding: "2rem", marginTop: "1rem"}}>
		        <Grid container spacing={3} direction="column">
		          <Grid container item xs={2} sm={7} spacing={4} direction="column">
		            <Grid item>
		              <Typography variant="h5" component="h4">
		                Let's help with Password
		              </Typography>
		            </Grid>
		            <Grid item container spacing={2} direction="column">
		              <TextField id="Email" label="Email" variant="outlined" />
		            </Grid>
		            <Grid item container justify="space-between">
		              <Button variant="contained" color="primary" type="submit">
								    RESET PASSWORD
							    </Button>
                </Grid>
              </Grid>
              <Grid item container direction="column" justify="center">
                <Grid item>  
                  <Typography variant="caption">
                    Gang Tracking System for
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">
                    TECHNICAL QUERIES
                    <br />
                    support@smpd.ca.gov
                    <br />
                    +1 764.542.XXXX
                  </Typography>
                </Grid>  
  
              </Grid>
            </Grid>
          </Paper>
		    </Grid>
		  </Grid>
		</Grid>  
	);
}
export default ForgotPassword;