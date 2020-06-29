import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/*import Authbackground from "./Authbackground";*/

function NewSignInPage() {
  return (
  	<Grid>
  	<Grid item style={{backgroundColor: "blue",height:"6rem"}}>
  	
	
	  <Grid container justify ="center">
		<Grid item xs={10}>
		  <Paper style ={{padding:"2rem"}}>
		    <Grid container spacing={6}>
              <Grid container item xs={7} spacing={4} direction="column">
		        <Grid item>
		          <Typography variant="h5">
		            login
		          </Typography>
		        </Grid>
		        <Grid item container spacing={2} direction="column">
		          <Grid item>
		            <Typography variant="gmail">
		              abcd@gmail.com
		            </Typography>
		          </Grid>
		          <Grid item>
		            <TextField id="Password" label="Password" variant="outlined" />
		          </Grid>
		        </Grid>
		        <Grid item container justify="space-between">
		          <Button variant="contained" color="primary" type="submit">
		            login
                  </Button>
                  <Button color="primary" type="submit">
                    Forget Password
                  </Button>
                </Grid>
		      </Grid>
		      <Grid container xs={4} direction="column" justify="center">
		        <Grid item>
		          <Typography variant="caption">
		            Gang Tracking System for
		          </Typography>
		        </Grid>
		        <Grid item>
		          <Typography variant="h6">
		            Santa Monica Police Department, California
		          </Typography>
		        </Grid>
		      </Grid>
		    </Grid>
		  </Paper>
		</Grid>
	  </Grid>
	</Grid>
	</Grid>
    
    
		
  );
}
export default NewSignInPage;