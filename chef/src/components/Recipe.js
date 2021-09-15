import React from 'react'
import styled from 'styled-components'
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'
function Recipe ({
  recipes,
  search,
  updateSearch,
  handleSubmit,
  filterSearch,
  setDietLabels,
  setHealthLabels
}) {
  return (
    <div>
      <H1>
        Search for Your Favorite Food. Find Thousands of Recipes, Including
        International Dishes.
      </H1>
      <RecipeForm
        recipes={recipes}
        updateSearch={updateSearch}
        handleSubmit={handleSubmit}
        setDietLabels={setDietLabels}
        setHealthLabels={setHealthLabels}
        search={search}
      />
      <RecipeList recipes={recipes} />
    </div>
  )
}

export default Recipe

const H1 = styled.h1`
  color: #002700;
  margin: 0 auto;
  width: 70%;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid whitesmoke;
`
