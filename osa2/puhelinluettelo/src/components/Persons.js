import React from 'react'
import Person from './Person'
import personService from '../services/persons'

const Persons = ({ persons, setPersons, filterTerm, setMessage}) => {

  const removePerson = (ppl) => {
    let confirmed = window.confirm(`Delete ${ppl.name}`)
    if (confirmed) {
      personService.remove(ppl.id).then(() => {
        console.log(`${ppl.id} removed`)
        setPersons(persons.filter(person => person.id !== ppl.id))
        console.log(persons)
      })
      setMessage(`Deleted ${ppl.name}`)
    } else {
      console.log("Didn't delete")
    }
  }

  const people = () => {
    let shown = []
    persons.forEach((person, i) => {
      if (person.name.toLowerCase().includes(filterTerm.toLowerCase())) {
        console.log(person.name)
        shown = shown.concat(person)
        console.log(shown)
      }
    });
    console.log(shown)
    return (shown.map(ppl => <li key={ppl.id}><Person name={ppl.name} number={ppl.number} /> <button onClick={() => removePerson(ppl)}>delete</button> </li>))
  }

  return (
    <div>
      <ul>
        {people()}
      </ul>
    </div>
  )
}

export default Persons