import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import Logo  from "./general/Logo";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  top: {
    height: "30%",
    backgroundColor: palette.info.main,
  },
  middle: {
    height: "10%",
    backgroundColor: palette.primary.main,
  },
  bottom: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.background.default,
  },
  children: {
    marginTop: "-8vh",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    margin: "2rem 0rem",
    color: "red",
    "font-size": "11px",
  },
}));

function AuthBackground({ children }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid
        className={classes.top}
        container={true}
        justify="center"
        alignContent="center"
      >
        <Logo />
      </Grid>
      <Grid item className={classes.middle}></Grid>
      <Grid item className={classes.bottom} container>
        <Grid container className={classes.children}>
          {children}
        </Grid>
        <div className={classes.footer}>POWERED BY GANGS TRACK INC</div>
      </Grid>
    </Grid>
  );
}

export default AuthBackground;
