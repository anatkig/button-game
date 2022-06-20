import React from 'react';
import './App.css';
import Button from './button/Button';
import Counter from './counter/Counter';
import Switcher from './switcher/Switcher';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <div>Button Game</div>
      </header>
      <Provider store = {store}>
      <main id ="main">
      <Counter/>
      <Button/>
      <Switcher/>
      </main>
      </Provider>
    </div>
  );
}

export default App;
