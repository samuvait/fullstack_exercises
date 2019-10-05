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
  const countTotal = ({ exerCount }) => {
    console.log(exerCount)
    let sum = 0
    for (let i = 0; i < exerCount.length; i++) {
      sum += exerCount[i]
    }
    console.log(sum)
    return (sum)
  }

  console.log(parts.length)
  let exerCount = parts.map(part => part.exercises)
  return (
    <p>Number of exercises {countTotal({exerCount})}</p>
  )
}

const Part = ({name, exercises }) => {
  return (
    <p>{name} {exercises} </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))