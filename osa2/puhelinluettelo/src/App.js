import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm';
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ filterTerm, setFilterTerm] = useState('')
  const [ message, setMessage ] = useState(null)

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

      <Notification message={message}/>

      <Filter persons={persons} filterTerm={filterTerm} setFilterTerm={setFilterTerm}/>

      <h2>add new</h2>
      <PersonForm persons={persons} setPersons={setPersons} message={message} setMessage={setMessage}/>

      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filterTerm={filterTerm} setMessage={setMessage}/>
    </div>
  )
}

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  } else {
    return (
      <div className='success'>
        {message}
      </div>
    )
  }
}

export default App