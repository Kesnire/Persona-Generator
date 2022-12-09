import './App.css';
import React, { useState } from 'react';
//import CSV data
import { adjectives, types, classes } from './data/data';

function App() {

  //set state variables and setters
  const [adjectiveText, setAdjectiveText] = useState("...");
  const [typeText, setTypeText] = useState("...");
  const [classText, setClassText] = useState("...");

  const capitalize = (word) => {
    let newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord
  }
  
  //function for updating state of the different text variables 
  const changeText = () => {

    setAdjectiveText(capitalize(adjectives[Math.floor(Math.random() * adjectives.length)]));
    setTypeText(capitalize(types[Math.floor(Math.random() * types.length)]));
    setClassText(classes[Math.floor(Math.random() * classes.length)]);
  }

  return (
    <div className="App">
      <header>
        <h1>Generate A New Persona</h1>
      </header>

    <div id="group-container">
        <div id="adjective-container" className="word-container">
            <h3 id="adjective">{adjectiveText}</h3>
        </div>
        <div id="type-container" className="word-container">
            <h3 id="type">{typeText}</h3>
        </div>
        <div id="class-container" className="word-container">
            <h3 id="class">{classText}</h3>
        </div>
    </div>

    <div id="button" onClick={changeText}>
        GENERATE
    </div>
    </div>
  );
}



export default App;
