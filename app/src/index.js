import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import  reducer from "./reducers/index";
import thunk from "redux-thunk";
import App from "./App";


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {createStore, applyMiddleware} from 'redux'
// import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import {reducer} from './reducers'

// const store = createStore(reducer, applyMiddleware(thunk))

// ReactDOM.render(
//    <Provider store={store}> 
//      <App />
//    </Provider>,
 
//   document.getElementById('root')
// );


