import { useState } from 'react'
import './App.css'
import Clip from './components/Clip'
import Stats from './components/Stats.jsx'
import { Data } from './data.js'
import Dropdown from './components/Dropdown.jsx'
import Header from './components/Header.jsx'

function App() {

  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Stats />
      </div>

    </>

  )
}

export default App
