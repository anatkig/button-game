import React from 'react';
import './counter.css';
import { connect } from 'react-redux';



const Counter = ({counter, level, increment,decrement,easy, medium, hard}:{
    counter: any;
    level: any;
    increment: any;
    decrement: any;
    easy: any;
    medium: any;
    hard: any;
}) => {

    return (

    <div id = "counter"><p>{counter}</p></div>
)}
const mapStateToProps = (state:any) => ({ counter: state.counter.counter as any , level: state.level.level as any});
const mapDispatchToProps = (dispatch:any) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'INCREMENT' }) as any,
      decrement: () => dispatch({ type: 'DECREMENT' }) as any,
      easy: () => dispatch({ type: 'EASY' }) as any,
      medium: () => dispatch({ type: 'MEDIUM' }) as any,
      hard: () => dispatch({ type: 'HARD' }) as any
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);