import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Recipe from './components/Recipe'

function App () {
  const [recipes, setRecipes] = useState([])
  const APP_ID = '89b6f730'
  const APP_KEY = 'e825a18b8543f517c176b5aee63db7c4'
  const getRecipe = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=spinach&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await res.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }
  useEffect(() => {
    getRecipe()
  }, [])

  return (
    <div className='App'>
      <Route exact path='/' component={Home} />
      <Route path='/recipe' render={() => <Recipe recipes={recipes} />} /> 
    </div>
  )
}

export default App
