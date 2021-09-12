import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App () {
  const [recipe, setRecipe] = useState([])
  const APP_ID = '89b6f730'
  const APP_KEY = 'e825a18b8543f517c176b5aee63db7c4'
  const getRecipe = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=spinach&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await res.json()
    console.log(data)
  }
  useEffect(() => {
    getRecipe()
  }, [])
  return (
    <div className='App'>
      <Route exact path='/' component={Home} />
      <Route path='/recipe' />
    </div>
  )
}

export default App
