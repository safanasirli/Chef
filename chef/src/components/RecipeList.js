import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import styled from 'styled-components'

function RecipeList ({ recipes }) {
  return (
    <Card>
      {recipes.map((recipe, index) => {
        return (
          <CardItem key={index}>
            <Img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h2>{recipe.recipe.label}</h2>
            <H3>Calories:{Math.round(recipe.recipe.calories)}kcal</H3>
            <Button onClick={() => (window.location.href = recipe.recipe.url)}>
              Full Recipe
            </Button>
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
`
const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  height: 500px;
  border: 1px solid black;
  margin: 0 10px 0 10px;
  border: 1px solid whitesmoke;
  margin-top: 2rem;
`
const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5%;
`
const Button = styled.button`
  display: flex;
  flex-direction: row;
  background-color: #002700;
  color: white;
  cursor: pointer;
  border: none;
  padding: 10px 20px 10px 20px;
  position: sticky;
  margin: 0 auto;
`

const H3 = styled.h3`
  color: grey;
`
const List = styled.ul`
  margin-top: -70%;
`
