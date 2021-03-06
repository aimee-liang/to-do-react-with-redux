// import './App.css';
import { useState } from 'react'
import { legacy_createStore } from 'redux';
import { combineReducers } from 'redux';

export default function App() {

  const reducer = combineReducers({
    tasks: (state = [], action) => {
      let newState = Object.assign([], state)
      switch (action.type) {
        case "ADD":
          newState.push(action.payload)
          displayTasks(newState)
        break;
        case "REMOVE":
          newState = newState.filter((task) => task !== action.payload)
        break;
        default: 
          return state
      }
      return newState
    }
  })
  
  const store = legacy_createStore(reducer)
  // const state = store.getState()
  const [task, setTask] = useState("")

  const updateTask = e => {
    setTask(e.target.value)
  }
  
  const displayTasks = state => {
    return state.forEach((task, index) => {
      return (
        <>
          <li id={index}>{task}</li>
          <button onClick={removeFromStore(index)}>COMPLETE</button>
        </>
    )})
  }

  const addToStore = () => {
    store.dispatch({type: "ADD", payload: task})
  }

  const removeFromStore = () => {
    store.dispatch({type: "REMOVE", payload: index})
  }

  return (
    <>
      <h2>To Do List</h2>
      <div>
        <input type="text" value={task} onChange={updateTask}></input>
        <button onClick={addToStore}>ADD</button>
      </div>
    </>
  );
}
