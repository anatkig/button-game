import React from 'react';
import './switcher.css';
import { connect } from 'react-redux';


const Switcher = (counter:any, level:any) => (
    <div id= "switcher">
        <div>Choose the level</div>
    <div>
        <span>Easy</span><span>Medium</span><span>Hard</span>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Switcher);