// import './App.css';
import { useState } from 'react'
import { legacy_createStore } from 'redux';
import { combineReducers } from 'redux';

function App() {

  const reducer = combineReducers({
    tasks: (state = [], action) => {
      let newState = Object.assign([], state)
      switch (action.type) {
        case "ADD":
          newState.push(action.payload)
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
  const state = store.getState()
  const [task, setTask] = useState("")

  const updateTask = e => {
    setTask(e.target.value)
  }
  
  const displayTasks = () => {
    state.tasks.map((task, idx) => {
      return (
        <li id={idx}>{task}</li>
    )})
  }

  const dispatchToStore = () => {
    store.dispatch({type: "ADD", payload: task})
  }

  return (
    <>
      <h2>To Do List</h2>
      <div>
        <input type="text" value={task} onChange={updateTask}></input>
        <button onClick={dispatchToStore}>ADD</button>
        {state.tasks.length ? displayTasks() : ''}
      </div>
    </>
  );
}

export default App;
