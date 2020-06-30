import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Logo from "../general/Logo";
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
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Grid container spacing={3} justify='flex-start'>
									<Grid item>
										<Typography variant='h5'>Let's help with Password</Typography>
									</Grid>
									<Grid item xs={12}>
										<TextField variant='outlined' fullWidth label='email' />
									</Grid>
									<Grid item>
										<Button variant='contained' color='primary'>RESET PASSWORD</Button>
									</Grid>
								</Grid>
							</Grid>
							<Grid item container xs={6} direction='column' justify='space-between'>
								<Grid item>
									<Typography variant='caption'>Gang Tracking system for</Typography>
								</Grid>
								<Grid item>
									<Grid container direction='column' style={{color: 'blue'}}>
										<Grid item>
											<Typography variant='caption'>TECHNICAL QUERIES</Typography>
										</Grid>
										<Grid item>
											<Typography variant='caption'>support@gmail.com</Typography>
										</Grid>
									</Grid>
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