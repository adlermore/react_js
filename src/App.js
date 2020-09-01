import React from 'react';
import logo from './logo.svg';
import './App.css';


function NameTest(props){
  return (
  <p>My name is {props.name}</p>
  );
}

function SurnameTest(props){
  return (
    <h1>My Surname is {props.surname}</h1>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> in Love 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React For Sisian 
        </a>
        <NameTest name="Ashot" />
        <SurnameTest surname="Karapetyan" />

      </header>
    </div>
  );
}



export default App;
