import React from 'react'
import Person from './Person'

const Persons = (props) => {

  const people = () => {
    let list = props.persons.map(ppl => <p><Person key={ppl.name} name={ppl.name} /></p>)
    console.log(list)
    return (list)
  }

  return(
    <div>
      <h2>Numbers</h2>
        {people()}
    </div>
  )
}

export default Persons