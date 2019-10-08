import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm';
import axios from 'axios';

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterTerm, setFilterTerm] = useState('')

  useEffect(() => {
    //console.log('effect')
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }, [])

  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} filterTerm={filterTerm} setFilterTerm={setFilterTerm}/>

      <h2>add new</h2>
      <PersonForm persons={persons} newName={newName} newNumber={newNumber} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <Persons persons={persons} filterTerm={filterTerm}/>
    </div>
  )
}

export default App