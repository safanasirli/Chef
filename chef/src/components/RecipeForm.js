import React from 'react'
import styled from 'styled-components'

function RecipeForm ({ search, updateSearch }) {
  return (
    <div>
      <form>
        <Input type='text' value={search} onChange={updateSearch} />
        <Button type='submit'>Search</Button>
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
