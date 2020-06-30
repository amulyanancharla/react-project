import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Logo from "./Logo";
import TextField from "@material-ui/core/TextField";

function NewSignInPage() {
  return (
	<Grid container>
		<Grid item xs={12} container style={{backgroundColor: 'blue', height: '15rem'}} alignItems="center" justify="center">
			<Logo />
		</Grid>
		<Grid container justify ="center" style={{backgroundColor: '#33b2ff', height: "4rem"}} >
			<Grid item xs={6}>
				<Paper style ={{padding:"2rem", marginTop: '1rem'}}>
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
			<Grid container justify="center" style={{margin: "2rem 0rem",color: "red",fontsize: "8px"}}>
			  <Typography>
			    POWERED BY GANGS TRACK INC
			  </Typography>
             
            </Grid>
		</Grid>
	</Grid>
  );
}
export default NewSignInPage;