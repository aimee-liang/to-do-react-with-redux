import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducer = combineReducers({
  tasks: (state = [], action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
      case "ADD":
        newState = state.push([action.payload])
        // return newState
      break;
      case "REMOVE":

      break;
      default: 
        return state
    }
    return newState
  }
})

const store = legacy_createStore(reducer, [])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
