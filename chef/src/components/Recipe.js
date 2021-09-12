import React from 'react'
import styled from 'styled-components'
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'
function Recipe ({ recipes, search, updateSearch }) {
  return (
    <div>
      <H1>
        Search for Your Favorite Food. Find Thousands of Recipes, Including
        International Dishes.
      </H1>
      <RecipeForm updateSearch={updateSearch} search={search} />
      <RecipeList recipes={recipes} />
    </div>
  )
}

export default Recipe

const H1 = styled.h1`
  color: #002700;
`
