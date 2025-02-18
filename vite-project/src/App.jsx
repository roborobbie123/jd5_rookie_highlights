import { useState } from 'react'
import './App.css'
import Clip from './components/Clip'
import Stats from './components/Stats.jsx'
import { Data } from './data.js'

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  function handleClick(week) {
    setSelectedButton(week);
  }

  const selectedData = Data.find((item) => item.week === selectedButton)


  return (
    <div className='container'>
      <h3>Jayden Daniels Rookie Season Recap</h3>
      <br></br>
      <section>
        {Data.map((week) => <button className={selectedButton === week.week? "btn btn-warning" : "btn btn-light"} key={week.week} onClick={() => handleClick(week.week)}>Week {week.week}</button>)}
        <hr></hr>
      </section>
      <section>
        {selectedData ? <Clip link={selectedData.link} title={selectedData.title}></Clip> : null}
        <hr></hr>
      </section>
      <section>
        {selectedData ? <Stats pass_td={selectedData.pass_td} pass_yd={selectedData.pass_yds} int={selectedData.int} 
        rush_td={selectedData.rush_tds} rush_yd={selectedData.rush_yds}/> : null}
      </section>
    </div>

  )
}

export default App
