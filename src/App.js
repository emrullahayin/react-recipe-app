import React, { useEffect, useState } from "react";
import axios from "axios";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Recipe from "./components/Recipe";

import GridList from "@material-ui/core/GridList";
import CircularProgress from "@material-ui/core/CircularProgress";
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

const App = props => {
  const { classes } = props;
  
  const APP_ID = "1d018658";
  const APP_KEY = "eefe424911982c21e5f6506847fff4fe";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=water&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = response.data;
      setRecipes(data.hits);
    } catch (err) {
      console.log("err :", err);
    }
  };
  return (
    <div className="App">
      <Paper className={classes.root} elevation={1}>
        <InputBase
          className={classes.input}
          placeholder="Search Recipe"
          value={search}
          onChange={updateSearch}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="Search"
          color="primary"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <GridList cellHeight={180} style={{ marginTop: 20 }}>
        {recipes.length === 0 ? (
          <div>
            <CircularProgress style={{ margin: "0 auto" }} color="secondary" />
          </div>
        ) : (
          recipes.map((repice, index) => (
            <Recipe
              key={index}
              title={repice.recipe.label}
              subtitle={repice.recipe.source}
              image={repice.recipe.image}
              shareLink={repice.recipe.shareAs}
            />
          ))
        )}
      </GridList>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
