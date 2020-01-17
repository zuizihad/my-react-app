import React from 'react';
import logo from './logo.svg';
import './App.css';
import './mySass.scss'
import '../node_modules/materialize-css/dist/css/materialize.min.css'


function App() {

  const textStyle ={
    color: "black",
    backgroundColor:"green",
    padding: "30px",
    margin:"40px"
  }

  return (
    <div className="App">
      <h1 style={textStyle}>Home</h1>
      <h1 className="TextStyle">sass</h1>
    </div>
  );
}

export default App;
