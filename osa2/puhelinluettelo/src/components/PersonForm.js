import React, { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, message, setMessage }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let i = persons.findIndex(person => person.name === newName)

    const newPerson = {
      name: newName,
      number: newNumber
    }

    console.log(i)

    if (i < 0) {
      console.log('add', newName)

      personService.create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })

      setMessage(`Added ${newName}`)
      setNewName('')
      setNewNumber('')
    } else if (!persons.map(ppl => ppl.number).includes(newNumber)) {
      //window.alert(`${newName} is already added to phonebook`)
      let confirmed = window.confirm(`${newName} is already added to the phonebook, do you wish to replace the old number with the new one?`)
      if (confirmed) {
        let id = persons[i].id
        personService.update(id, newPerson).then(newPerson => {
          setPersons(persons.map(person => person.id !== id ? person : newPerson))
        })
        setMessage(`Changed number of ${newName}`)
        setNewName('')
        setNewNumber('')
      }
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