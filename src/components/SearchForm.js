import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("counter:", counter);
  });

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="Search Recipe" />
      <IconButton
        className={classes.iconButton}
        aria-label="Search"
        color="primary"
        onClick={() => setCounter(counter + 1)}
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
