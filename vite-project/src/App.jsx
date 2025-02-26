import { useState } from 'react'
import './App.css'
import Clip from './components/Clip'
import Stats from './components/Stats.jsx'
import { Data } from './data.js'
import Dropdown from './components/Dropdown.jsx'
import Header from './components/Header.jsx'
import WeekContextProvider from './WeekContextProvider.jsx'

function App() {

  function handleChange(weekSelector) {
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].week === weekSelector) {
        setWeek(Data[i]);
      }
    }
  }

  return (
    <WeekContextProvider>
      <div className="rounded-2xl text-[#FFB612] font-mono">
        <Header />
        <Dropdown/>
        <Stats/>
        <Clip/>
      </div>
    </WeekContextProvider>

  )
}

export default App
