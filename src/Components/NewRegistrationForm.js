import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Logo from "./Logo";
import TextField from "@material-ui/core/TextField";

function NewRegistrationForm() {
	return (
		<Grid container>
		  <Grid item xs={12} container style={{backgroundColor: "blue", height: "15rem"}} alignItems="center" justify="center">
		    <Logo />
		  </Grid>
		  <Grid container justify="center" style={{ backgroundColor: "#33b2ff", height: "4em"}}>
		    <Paper style={{padding : "2rem", margin: "1rem"}}>
		      <Grid container spacing={2} direction="column">
		        <Grid item>
		          <Typography variant="h5" component="h4">
		            Registration Process
		          </Typography>
		        </Grid>
		        <Grid container direction="column">
		          <Grid sm={6}>
		            <TextField id="Enter Full Name" label="Enter Full Name" variant="outlined" />
		            <TextField id="Mobile Number" label="Mobile Number" variant="outlined" />
		            <TextField id="Jurisdiction" label="Jurisdiction" variant="outlined" />
		            <TextField id="Password" label="Password" variant="outlined" />
		            <TextField id="Re-Enter Password" label="Re-Enter Password" variant="outlined" />
		          </Grid>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" type="Submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
		    </Paper>
		  </Grid>
		</Grid>
	);
}
export default NewRegistrationForm;