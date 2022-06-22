import React from 'react';
import './App.css';
import Main from './components/main/Main';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>Button Game</div>
      </header>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
