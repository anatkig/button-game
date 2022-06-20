import React from 'react';
import './counter.css';
import { connect } from 'react-redux';


const Counter = (counter:any, level:any) => (
    <div id = "counter"><p>0</p></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);