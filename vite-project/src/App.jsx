import { useState } from 'react'
import './App.css'
import Clip from './components/Clip'
import Stats from './components/Stats.jsx'
import { Data } from './data.js'
import Dropdown from './components/Dropdown.jsx'
import Header from './components/Header.jsx'

function App() {
  const [week, setWeek] = useState(Data[0]);

  function handleChange(weekSelector) {
    for(let i = 0; i < Data.length; i++) {
      if (Data[i].week === weekSelector) {
        setWeek(Data[i]);
      }
    }
  }

  return (
    <>
      <Header />
      <Dropdown onChange={handleChange}/>
      <Stats week={week}/>
      <Clip week={week}/>
    </>

  )
}

export default App
