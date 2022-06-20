import React from 'react';
import './button.css';
import { connect } from 'react-redux';

const Button =  ({counter, level, increment,decrement,easy, medium, hard}:{
    counter: any;
    level: any;
    increment: any;
    decrement: any;
    easy: any;
    medium: any;
    hard: any;
}) => (
    <div id = "button">
        
        <button onClick={increment}>Button</button>
        
        </div>
)

const mapStateToProps = (state:any) => ({ counter: state.counter.counter, level: state.level.level });
const mapDispatchToProps = (dispatch:any) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
      easy: () => dispatch({ type: 'EASY' }),
      medium: () => dispatch({ type: 'MEDIUM' }),
      hard: () => dispatch({ type: 'HARD' })
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Button);