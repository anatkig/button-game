import React from 'react';
import './App.css';
import Button from './button/Button';
import Counter from './counter/Counter';
import Switcher from './switcher/Switcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <div>Button Game</div>
      </header>
      <main id ="main">
      <Counter/>
      <Button/>
      <Switcher/>
      </main>
    </div>
  );
}

export default App;
