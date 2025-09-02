import { useState } from 'react'
import './App.css'

const Statistics = (props) => {
  if (props.good < 1 && props.neutral < 1 && props.bad < 1) {
    return (
      <div>
        <h2>No Feeback has been provided</h2>
      </div>
    )
  }
  return(
  <div>
    <h2>Statistics</h2>
      <table>
        <tr>
        <th>Statistic</th>
        <th>Value</th>
        </tr>
        <StatisticLine text="Good" value ={props.good} />
        <StatisticLine text="Neutral" value ={props.neutral} />
        <StatisticLine text="Bad" value ={props.bad} />
        <StatisticLine text="Total" value ={props.total} />
        <StatisticLine text="Average" value ={((props.good*1)+(props.bad*-1))/props.total} />
        <StatisticLine text="Positive %" value ={(props.good/props.total)*100} />
      </table>
  </div>
 )
}

const StatisticLine = (props) =>{
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) =>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total=good+neutral+bad
  const increaseGood = () => {
    console.log('increasing, good value before', good)
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    console.log('increasing, neutral value before', neutral)
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    console.log('increasing, bad value before', bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Welcome to the feedback page</h1>
      <h3>Please give us your feedback based on your experience</h3>
      <Button onClick={increaseGood} text='Good'/>
      <Button onClick={increaseNeutral} text='Neutral'/>
      <Button onClick={increaseBad} text='Bad'/>
      
      <Statistics 
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}/>
      
      
    </div>
  )
}

export default App