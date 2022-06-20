import React from 'react';
import './button.css';
import { connect } from 'react-redux';
import { useRef } from 'react';

const Button =  ({counter, level, increment,decrement,easy, medium, hard}:{
    counter: any;
    level: any;
    increment: any;
    decrement: any;
    easy: any;
    medium: any;
    hard: any;
}) => {

    const savedTimeout = useRef({} as NodeJS.Timeout);
 

    const handleDecrement = () => {
    
        let innerCounter = counter;

        const interval = setInterval(()=>{
          
            decrement();
            innerCounter--;

       if(innerCounter < 0) {
      
        clearInterval(interval)
       }
    

        },1000);
    }

    const handleClick = ()=>{
         increment()

        clearTimeout(savedTimeout.current);

        const timeout = setTimeout(handleDecrement,10000);
        savedTimeout.current=timeout;

    }
 
    return (
    <div id = "button">
        <button onClick={handleClick}>Button</button>
    </div>
)}

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