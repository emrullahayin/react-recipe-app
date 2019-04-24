import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
};

const SearchForm = props => {
  const { classes } = props;
  const APP_ID = "1d018658";
  const APP_KEY = "eefe424911982c21e5f6506847fff4fe";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      console.log(response.data);
    } catch (err) {
      console.log("err :", err);
    }
  };

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="Search Recipe" />
      <IconButton
        className={classes.iconButton}
        aria-label="Search"
        color="primary"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchForm);
