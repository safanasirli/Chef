import React, { useState } from 'react'
import styled from 'styled-components'

function RecipeList ({ recipes }) {
  const [active, setActive] = useState(false)
  const toggleIngredients = () => {
    setActive(!active)
  }
  return (
    <Card>
      {recipes.map((recipe, index) => {
        return (
          <CardItem key={index}>
            <Img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h1>{recipe.recipe.label}</h1>
            <h2>Calories:{recipe.recipe.calories}</h2>
            <button onClick={toggleIngredients}>Ingredients</button>
            {active ? (
              <ul>
                {recipe.recipe.ingredients.map((ingredients, idx) => (
                  <li key={index}>{ingredients.text}</li>
                ))}
              </ul>
            ) : (
              <ul></ul>
            )}

            <a href={recipe.recipe.url}>See the recipe</a>
          </CardItem>
        )
      })}
    </Card>
  )
}

export default RecipeList
const Card = styled.div`
  display: flex;
  flex-direction: row;
  flew-wrap: wrap;
`
const CardItem = styled.div`
  width: 400px;
  height: 700px;
  border: 1px solid black;
  margin: 0 10px 0 10px;
`
const Img = styled.img`
  width: 400px;
  height: 400px;
`
