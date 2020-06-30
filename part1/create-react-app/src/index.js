import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return ( <
    h1 > {
      props.course
    } < /h1>
  )
}

const Content = (props) => {
  return ( <
    div >
    <
    Part part = {
      props.exercises.part1
    }
    exercise = {
      props.exercises.exercises1
    }
    /> <
    Part part = {
      props.exercises.part2
    }
    exercise = {
      props.exercises.exercises2
    }
    /> <
    Part part = {
      props.exercises.part3
    }
    exercise = {
      props.exercises.exercises3
    }
    /> <
    /div>
  )
}

const Total = (props) => {
  return ( <
    p > Number of exercises {
      props.total.exercises1 + props.total.exercises2 + props.total.exercises3
    } < /p>
  )
}

const Part = (props) => {
  return ( <
    p > {
      props.part
    } {
      props.exercise
    } < /p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return ( <
    div >
    <
    h1 > {
      course
    } < /h1> <
    p > {
      part1
    } {
      exercises1
    } <
    /p> <
    p > {
      part2
    } {
      exercises2
    } <
    /p> <
    p > {
      part3
    } {
      exercises3
    } <
    /p> <
    p > Number of exercises {
      exercises1 + exercises2 + exercises3
    } < /p> <
    /div>
  )
}

ReactDOM.render( < App / > , document.getElementById('root'))