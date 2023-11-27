import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// Components.
const Anecdotes = (props) => {
  return(
    <>
     <p>{props.array[props.value]}</p>
    </>
  )
} 
const Votes = (props) => {
  return(
  <>
  <p>votes:{props.array[props.value]}</p>
  </>)
}
const Button = (props) => {
  return(
    <div>
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
  )
}
// Displayed anecdotes.
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// Main component
const App = () => {
  const [selected, setSelected] = useState(0)
  let initialState = new Uint8Array(anecdotes.length)   
  const [value, setValue] = useState(initialState)
  const [voted, setVoted] = useState(0)
  let copy = new Uint8Array([...value])
  // Button logic
  const clickAnecdote = () => () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  } 
  
  const clickVote = () => () => {
    copy[selected] += 1
    setValue(copy)
    let max = copy.indexOf(Math.max(...copy))
    setVoted(max)
  }
//App html stucture
  return(
    <div>
      <h1>Anecdote of the day</h1>
        <Anecdotes array={anecdotes} value={selected} />
      <div>
        <Votes array={value} value={selected} />
      </div>
      <div>
        <Button handleClick={clickAnecdote()} text="Next anecdote" />
        <Button handleClick={clickVote()} text="Vote" />
      </div>
      <div>
        <h1>Most voted anecdote</h1>
       <Anecdotes array={anecdotes} value={voted} />
      </div>
    </div>
  )
}
// Renderer
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
) 