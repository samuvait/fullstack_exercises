import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [amount, setAmount] = useState(0)
  const [mostVotes, setMost] = useState(0)

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
    mostVoted()
  }

  const mostVoted = () => {
    let most = 0
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[most]) {
        most = i
      }
    }
    console.log('most votes', most)
    setMost(most)
  }

  return (
    <div>
      <div>
        <h2>Anecdote of the Day</h2>
        <p>{props.anecdotes[selected]}</p>
        <p>This anecdote has {amount} votes</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleClick}>Next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{props.anecdotes[mostVotes]}</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const rnd = { "value": 0 }

const votes = new Array(anecdotes.length).fill(0)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)