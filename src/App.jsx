
import { useState } from 'react'
import './App.css'
import Bottles from './components/bottles/bottles'
import { useEffect } from 'react'


function App() {

  const [bottles, setBottles] = useState([])
  useEffect( () => {
    fetch('bottle.json')
    .then( res => res.json())
    .then(data => setBottles(data))
  },[])
  return (
    <>
      <h1>Memorable water bottle</h1>
      <h3>Bottles Here: {bottles.length}</h3>
      <Bottles bottles={bottles}></Bottles>
    </>
  )
}

export default App
