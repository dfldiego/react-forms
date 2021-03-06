import React from "react";
import SideMenu from "./SideMenu";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

const AppMaterial = () => {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
};

export default AppMaterial;
