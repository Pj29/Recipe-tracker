import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  // define function to create a new recipe to the recipes state
  // create new array with spread op inside callback
  // update the state with setRecipes by replacing previous arr with new arr
  const handleRecipeCreate = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

    // function to delete a recipe from recipes state arr, takes index param to represent the index to be deleted
    // invoke setRecipes to update state, taking callback fn as argument
    // callback fn receives the previous value of recipes 
    // create new arr updatedRecipes to store copy of previous recipes arr
    // splice updatedRecipes arr to remove a recipe at the specified index
    // updatedRecipes is returned from callback fn and state of recipes gets updated with new arr, deleting the old one
  const handleRecipeDelete = (index) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes];
      updatedRecipes.splice(index, 1);
      return updatedRecipes;
    });
  };
    // RecipeList component is passed in two props, recipes and onDeleteRecipe, assigned the value of the state of recipes arr
    // onDeleteRecipe prop is assigned the handleRecipeDelete fn
    // onRecipeCreate prop is assigned the handleRecipeCreate fn 
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDeleteRecipe={handleRecipeDelete} />
      <RecipeCreate onRecipeCreate={handleRecipeCreate} />
    </div>
  );
}

export default App;
