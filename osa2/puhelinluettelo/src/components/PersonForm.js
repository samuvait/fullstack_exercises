import React, { useState } from 'react'
import axios from 'axios'

const PersonForm = ({ persons, setPersons }) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event) => {

    event.preventDefault()
    if(!persons.map(ppl => ppl.name).includes(newName)) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      console.log('add', newName)

      axios.post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })

      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm