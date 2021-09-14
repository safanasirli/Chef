import React, { useState } from 'react'
import styled from 'styled-components'

function RecipeForm ({ search, updateSearch, handleSubmit }) {
  const [filterParam, setFilterParam] = useState('All')

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type='text' value={search} onChange={updateSearch} />
        <Button type='submit'>Search</Button>
        <select
          onChange={e => {
            setFilterParam(e.target.value)
          }}
        >
          <option value='All'>Filter By Diet</option>
          <option value='Balanced'>Balanced</option>
          <option value='High-Protein'>High Protein</option>
          <option value='Low-Card'>Low Carb</option>
          <option value='Low-Fat'>Low Fat</option>
        </select>
        <select
          onChange={e => {
            setFilterParam(e.target.value)
          }}
        >
          <option value='All'>Filter By Health</option>
          <option value='Vegan'>Vegan</option>
          <option value='Vegeterian'>Vegeterian</option>
          <option value='Alcohol-Free'>Alcohol Free</option>
          <option value='Peanut-Free'>Peanut Free</option>
          <option value='Sugar-Conscious'>Sugar Conscious</option>
        </select>
      </form>
    </div>
  )
}

export default RecipeForm

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
