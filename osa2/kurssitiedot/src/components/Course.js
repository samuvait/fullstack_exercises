import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Total = ({ parts }) => {

  const countTotal = parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)

  console.log(countTotal)
  return (
    <p>Number of exercises {countTotal}</p>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises} </p>
  )
}

export default Course