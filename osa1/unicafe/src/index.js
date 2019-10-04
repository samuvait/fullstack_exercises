import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }



  return (
    <div>
      <div>
        <h2> Give Feedback</h2>
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = ({ good, bad, neutral }) => {

  const avg = () => {
    if (good + bad + neutral > 0) {
      return (good - bad) / (good + neutral + bad)
    }
    return (0)
  }

  const positive = () => {
    if (good + bad + neutral > 0) {
      return good / (good + neutral + bad) * 100 + ' %'
    }
    return (0)
  }

  if (good + bad + neutral > 0) {
    return (
      <div>
        <h2> Statistics </h2>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={good + neutral + bad} />
        <Statistic text='average' value={avg()} />
        <Statistic text='positive' value={positive()} />
      </div>
    )
  } else {
    return (
      <div>
        <h2> Statistics </h2>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Statistic = ({ text, value }) => {
  return (<p>{text} {value}</p>)
}


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)