import React from 'react'

function RecipeList ({ recipes }) {
  return (
    <div>
      {recipes.map((recipe, idx) => {
        return (
          <card key='idx'>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h1>{recipe.recipe.label}</h1>
            <h2>Calories:{recipe.recipe.calories}</h2>
            <ul>
              {recipe.recipe.ingredients.map((ingredients, idx) => (
                <li key='idx'>{ingredients.text}</li>
              ))}
            </ul>
            <a href={recipe.recipe.url}>See the recipe</a>
          </card>
        )
      })}
    </div>
  )
}

export default RecipeList
