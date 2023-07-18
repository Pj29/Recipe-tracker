import React, { useState } from "react";
// component responsible for rendering a form to create new recipe
// accepts onRecipeCreate prop which represents a fn to be called 
function RecipeCreate({ onRecipeCreate }) {
  // define recipe state var with the initial state being set to empty strings for the properties
  // the state here will be used to track the values entered in the form inputs
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  // invoke this fn whenever there is a change to any of the inputs
  const handleChange = (event) => {
    // extracts name and value from event.target element
    const { name, value } = event.target;
     // use spread op to create a new object with the previouse recipe state's properties and values, then sets the specified name property to the new value
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  // invoke this fn when the form is submitted
  const handleSubmit = (event) => {
    // prevent default form submission behavior so there won't be a page refresh
    event.preventDefault();
     // invoke onRecipeCreate fn, passing current recipe state as arg to handle creation of new recipe
    onRecipeCreate(recipe);
    // afterwards, use setRecipe to reset the state to initial values
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };
    // return a JSX form with the input fields for a recipe
    // define form name, onSubmit attribute used to define callbackfn that handles form submissions
    return (
      <form name="create" onSubmit={handleSubmit}>
        {/*div container used for all of the form fields and is used for CSS*/}
      <div className="form-row">
        {/* define labels and input, using onChange to update the state*/}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={recipe.name}
          onChange={handleChange}
        />
        {/* value attribute is bound to the corresponding prop*/}
        <input 
          type="text"
          id="cuisine"
          name="cuisine"
          placeholder="Cuisine"
          value={recipe.cuisine}
          onChange={handleChange}
        />
    
        <input
          type="text"
          id="photo"
          name="photo"
          placeholder="URL" 
          value={recipe.photo}
          onChange={handleChange}
        />
    
        <textarea
          id="ingredients"
          name="ingredients"
          placeholder="Ingredients" 
          value={recipe.ingredients}
          onChange={handleChange}
        ></textarea>
    
        <textarea
          id="preparation"
          name="preparation"
          placeholder="Preparation" 
          value={recipe.preparation}
          onChange={handleChange}
        ></textarea>
    
        <button type="submit">Create</button>
      </div>
    </form>  
    );
  }
  
  export default RecipeCreate;  
