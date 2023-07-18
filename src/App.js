import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  // define function to create a new recipe to the recipes state
  const handleRecipeCreate = (newRecipe) => {
    // create new array with spread op inside callback
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    // update the state with setRecipes by replacing previous arr with new array
  };

    // function to delete a recipe from recipes state arr, takes index param to represent the index to be deleted
  const handleRecipeDelete = (index) => {
    // invoke setRecipes to update state, taking callback fn as argument
    setRecipes((prevRecipes) => {
      // callback fn receives the previous value of recipes
      // create new arr updatedRecipes to store copy of previous recipes array
      const updatedRecipes = [...prevRecipes];
      // splice updatedRecipes array to remove a recipe at the specified index
      updatedRecipes.splice(index, 1);
      // updatedRecipes is returned from callback fn and state of recipes gets updated with new array, deleting the old one
      return updatedRecipes;
    });
  };
    
    
    
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      {/* RecipeList component is passed in two props, recipes and onDeleteRecipe, assigned the value of the state of recipes array*/}
      {/* onDeleteRecipe prop is assigned the handleRecipeDelete fn*/}
      <RecipeList recipes={recipes} onDeleteRecipe={handleRecipeDelete} />
      {/*onRecipeCreate prop is assigned the handleRecipeCreate fn*/}
      <RecipeCreate onRecipeCreate={handleRecipeCreate} />
    </div>
  );
}

export default App;
