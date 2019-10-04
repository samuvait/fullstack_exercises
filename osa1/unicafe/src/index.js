import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  /*  const handleFeedback = ({ feedback }) => {
      let go = good
      let ne = neutral
      let ba = bad
  
      if (feedback === 'good') {
        go++
      } else if (feedback === 'neutral') {
        ne++
      } else if (feedback === 'bad') {
        ba++
      }
  
      setGood(go)
      setNeutral(ne)
      setBad(ba)
    }*/

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
      <div>
        <h2> Statistics </h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  )
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