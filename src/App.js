import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import FormClass from './components/FormClass';

function App() {
  return (
    <div className="App">
       <Welcome age="22" name="zihad"></Welcome>

       <FormClass name="class 1"></FormClass>
    </div>
  );
}

export default App;
