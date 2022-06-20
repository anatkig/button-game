import React from 'react';
import './button.css';
import { connect } from 'react-redux';

const Button = (counter:any, level:any) => (
    <div id = "button">
        
        <button>Button</button>
        
        </div>
)

const mapStateToProps = (state:any) => ({ counter: state.counter, level: state.level });
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