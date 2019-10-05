import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = ( {course} ) => {
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

  const countTotal = parts.reduce( (s, p) => {
    console.log('hmm', s, p)
    return s + p.exercises
  }, 0)

  console.log(countTotal)
  return (
    <p>Number of exercises {countTotal}</p>
  )
}

const Part = ({name, exercises }) => {
  return (
    <p>{name} {exercises} </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))