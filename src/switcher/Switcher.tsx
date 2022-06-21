import React from 'react';
import './switcher.css';
import { connect } from 'react-redux';


const Switcher =  ({counter, level, increment,decrement,easy, medium, hard}:{
    counter: any;
    level: any;
    increment: any;
    decrement: any;
    easy: any;
    medium: any;
    hard: any;
}) => {

    return (
    <div id= "switcher">
        <div>Choose the level</div>
    <div>
        <span className='level' onClick={easy} style={{backgroundColor:level==="EASY"?"pink":undefined}}>Easy</span>
        <span className='level' onClick={medium} style={{backgroundColor:level==="MEDIUM"?"pink":undefined}}>Medium</span>
        <span className='level' onClick={hard} style={{backgroundColor:level==="HARD"?"pink":undefined}}>Hard</span>
    </div>
    </div>
)
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Switcher);