import { useState } from 'react'

import './styles.css'
let num = 1
export const App = () => {
  const [inputState, setInputState] = useState('')
  const [todoState, setTodoState] = useState([])

  const getOnChangeInput = value => {
    setInputState(value)
  }

  const getOnClickOk = () => {
    const list = num + '.' + inputState
    const inputStateNext = [...todoState, list]

    setTodoState(inputStateNext)
    setInputState('')
    num = num + 1
  }

  const getOnClickClear = () => {
    num = 1
    setTodoState([])
  }

  const getTodoList = arr => {
    return arr.map(str => {
      return <div>{str}</div>
    })
  }

  return (
    <div className='App'>
      <h1>Hello TODO list</h1>
      <h2>Input - output TODO list</h2>
      <div className='inputGroup'>
        <input
          onChange={event => getOnChangeInput(event.target.value)}
          value={inputState}
        />

        <button onClick={event => getOnClickOk()}>OK</button>
        <button onClick={event => getOnClickClear()}>CLEAR</button>
      </div>

      <div className='todolist'>
        <ul>{getTodoList(todoState)}</ul>
      </div>
    </div>
  )
}

import ReactDOM from 'react-dom'

import { App } from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
