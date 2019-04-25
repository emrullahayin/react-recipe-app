import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "./components/SearchForm";
import Recipe from "./components/Recipe";

import GridList from "@material-ui/core/GridList";
import CircularProgress from "@material-ui/core/CircularProgress";

const App = props => {
  const APP_ID = "1d018658";
  const APP_KEY = "eefe424911982c21e5f6506847fff4fe";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = response.data;
      setRecipes(data.hits);
    } catch (err) {
      console.log("err :", err);
    }
  };
  return (
    <div className="App">
      <SearchForm />
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

export default App;
