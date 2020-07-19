import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
//import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";

const App = () => {
  const APP_ID = "e76d7a3f";
  const APP_KEY = "4268f0de78ce1c668f51b7551a1348f9";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pasta");
  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line 
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = (e) => {

    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
    <Nav/>
      <form onSubmit={getSearch} className="search-form ">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default App;
