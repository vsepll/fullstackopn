import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <div>
      <button onClick={props.handleclick}>{props.text}</button>
  </div>
)

const Statistics = (props) => {
  return(
  <table>
    <tr>
      <th>{props.text}:</th>
      <td>{props.value}</td>
    </tr>
  </table>
  )
}
  
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const click = (valoracion) => () => {
    switch(valoracion) {

      case "setGood": 
        setGood(good + 1)
      break;
      case "setBad": 
        setBad(bad +1)
      break;
      case "setNeutral": 
        setNeutral(neutral +1)
      break;
      default:
        break;
    }

  }
  const StatisticsGroup = (props) => {
    if (props.good + props.bad + props.neutral === 0){
    return(
    <div>
        <p>No feedback given yet.</p>
    </div>
    )
    }
    let all = (good + bad + neutral)
    let average = (good - bad) / (good + bad + neutral)
    let positive = (good*100) / (good + bad + neutral)
    return(
    <div>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={all} />
      <Statistics text="average" value={`${average.toFixed(3)}`} />
      <Statistics text="positive" value={`${positive.toFixed(2)}%`} />
    </div>
    )
  }
        
  return (

  <div>
    <h2>Give us your feedback.</h2>
     <Button handleclick={click("setGood")} text={"good"} />
     <Button handleclick={click("setNeutral")} text={"neutral"} />
     <Button handleclick={click("setBad")} text={"bad"} />
    
    <h2>Statistics</h2>
    <StatisticsGroup good={good} bad={bad} neutral={neutral} /> 
  </div>
  )
}

ReactDOM.render(<App />, 
   document.getElementById('root')
)