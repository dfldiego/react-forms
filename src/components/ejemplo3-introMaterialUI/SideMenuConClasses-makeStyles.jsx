import React from "react";
import { makeStyles } from "@material-ui/core";

// withStyles & makeStyles

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

const SideMenu = () => {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className={classes.sideMenu}>
      <h1>asdas</h1>
    </div>
  );
};

export default SideMenu;
