import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataStore from './store/DataStore';
import  'bootstrap/dist/css/bootstrap.min.css'

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    data: new DataStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
