import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm';
import axios from 'axios';
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ filterTerm, setFilterTerm] = useState('')

  useEffect(() => {
    //console.log('effect')
    personService.getAll().then(all => {
      setPersons(all)
    })
  }, [])

  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} filterTerm={filterTerm} setFilterTerm={setFilterTerm}/>

      <h2>add new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filterTerm={filterTerm}/>
    </div>
  )
}

export default App