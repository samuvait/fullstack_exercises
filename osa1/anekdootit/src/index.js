import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [amount, setAmount] = useState(0)

  const handleClick = () => {
    rnd.value = Math.floor(Math.random() * 6)
    console.log(rnd.value)
    setSelected(rnd.value)
    setAmount(votes[rnd.value])
  }

  const handleVote = () => {
    console.log('rnd luku', rnd.value)
    votes[rnd.value] += 1
    console.log('amount after', votes[rnd.value])
    setAmount(votes[rnd.value])
  }

  return (
    <div>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <p>{props.anecdotes[selected]}</p>
      <p>This anecdote has {amount} votes</p>
    </div>
  )
}

const rnd = {"value": 0}

const votes = new Array(6).fill(0)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)