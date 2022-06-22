import React from 'react';
import './App.css';
import Button from './components/button/Button';
import Counter from './components/counter/Counter';
import Switcher from './components/switcher/Switcher';
import StarBox from './components/starBox/StarBox';
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
      <StarBox/>
      <Counter/>
      <Button/>
      <Switcher/>
      </main>
      </Provider>
    </div>
  );
}

export default App;
