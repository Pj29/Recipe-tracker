import React from "react";
// destructure recipes and onDeleteRecipe props
function RecipeList({ recipes, onDeleteRecipe }) {
  // create table structure with table, thead, tr, th
  // use recipes.map to map over recipes arr, iterating through each recipe and generating a table row for each recipe
  // using the map method, the RecipeList component dynamically renders the table rows based on the number of recipes in the recipes array, ensuring that the table is updated when the data changes
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cusine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
          <tr key={index}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
              <img src={recipe.photo} alt={recipe.name} />
            </td>
            <td className="content_td">
              <p>{recipe.ingredients}</p>
            </td>
            <td className="content_td">
              <p>{recipe.preparation}</p>
            </td>
            <td>
              <button
                name="delete"
                onClick={() => onDeleteRecipe(index)}
                >
                  Delete 
                </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
