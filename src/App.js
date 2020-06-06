import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter startValue={3}/>
    </div>
  );
}

export default App;
