import React, { useState } from 'react'
import styled from 'styled-components'
import '../App.css'
function RecipeForm ({
  search,
  updateSearch,
  handleSubmit,
  setHealthLabels,
  setDietLabels
}) {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          value={search}
          onChange={updateSearch}
          placeholder='Search recipes by name, ingredient, etc'
        />
        <Button type='submit'>Search</Button>
        <select onClick={e => setDietLabels(e.target.value)}>
          <option>Filter By Diet</option>
          <option value='balanced'>Balanced</option>
          <option value='high-fiber'>High-Fiber</option>
          <option value='high-protein'>High-Protein </option>
          <option value='low-fat'>Low-Fat</option>
          <option value='low-carb'>Low-Carb</option>
          <option value='low-sodium'>Low-Sodium</option>
        </select>
        <select onClick={e => setHealthLabels(e.target.value)}>
          <option value='vegan'>Filter By Health</option>
          <option value='vegan'>Vegan</option>
          <option value='vegetarian'>Vegeterian</option>
          <option value='paleo'>Paleo</option>
          <option value='dairy-free'>Dairy-Free</option>
          <option value='gluten-free'>Gluten-Free</option>
          <option value='fat-free'>Fat-Free</option>
          <option value='low-sugar'>Low-Sugar</option>
          <option value='peanut-free'>Peanut-Free</option>
          <option value='egg-free'>Egg-Free</option>
        </select>
      </form>
    </Container>
  )
}

export default RecipeForm
const Container = styled.div`
text-align:center;
`
const Input = styled.input`
  border: 2px solid #002700;
  border-radius: 8px;
  height: 25px;
  width: 50%;
  margin-right: 1%;
`
const Button = styled.button`
  background-color: #002700;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  width: 90px;
  padding: 7px 10px 7px 10px;
`
