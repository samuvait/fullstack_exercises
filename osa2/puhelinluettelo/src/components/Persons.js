import React from 'react'
import Person from './Person'

const Persons = (props) => {

  const people = () => {
    let shown = []
    props.persons.forEach((person, i) => {
      if(person.name.toLowerCase().includes(props.filterTerm.toLowerCase())) {
        console.log(person.name)
        shown = shown.concat(person)
        console.log(shown)
      }
    });
    console.log(shown)
    return (shown.map(ppl => <Person key={ppl.name} name={ppl.name} number={ppl.number} />))
  }

  return (
    <div>
      {people()}
    </div>
  )
}

export default Persons