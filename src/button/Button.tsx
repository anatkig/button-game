import React from 'react';
import './button.css';
import { connect } from 'react-redux';
import { useRef, useState, useEffect } from 'react';

const Button =  ({counter, level, increment,decrement,easy, medium, hard, addStar, overdrive, setOverdrive}:{
    counter: any;
    level: any;
    increment: any;
    decrement: any;
    easy: any;
    medium: any;
    hard: any;
    addStar: any;
    overdrive: boolean;
    setOverdrive: any;
}) => {

    const savedTimeout = useRef({} as NodeJS.Timeout);
    const clickTimes = useRef([] as number[]);
    const [buttonBackground, setButtonBackground] = useState("lightgreen");
    const [countdown, setCountDown]  = useState(false);

    useEffect(()=>{
        if(countdown) {
            setButtonBackground("orange");
        const interval = counter>0&&setInterval(()=>{
             decrement();
        if(counter < 0) {
         setButtonBackground ("lightgreen");
        }
         },1000);

         if(counter===0) setButtonBackground ("lightgreen");
         
         return () => {
            clearInterval(interval as any);
        };
        }
    }
    ,[countdown, counter, decrement])
 


    const handleClick = ()=>{

        let overdriveChance = 10;
        let numClickSecond = 3;

        if(level === "EASY") {
            overdriveChance = 3;
            numClickSecond = 5;
        } else if (level === "MEDIUM") {
            overdriveChance = 10;
            numClickSecond = 3;
        } else if (level === "HARD") {
            overdriveChance = 20;
            numClickSecond = 1;
        }

        const overdriveEvent = Math.floor(Math.random() * overdriveChance) + 1;

        clickTimes.current.push(Date.now());
        const lastClickTimes = clickTimes.current.slice(clickTimes.current.length - numClickSecond-1);

if(lastClickTimes.length===1||!(lastClickTimes[lastClickTimes.length - 1] - lastClickTimes[0] <= 1000)) {

     if (overdriveEvent === 1) {
         setOverdrive();
     }
        increment();
        
         if(counter%10===0&&counter!==0) {
            addStar();
         }

        clearTimeout(savedTimeout.current);

        const timeout = setTimeout(()=>setCountDown(true),10000);
        savedTimeout.current=timeout;
        }
    }
 
    return (
    <div id = "button">
        <button className='app-button' onClick={handleClick} style = {{backgroundColor: buttonBackground }}>Button</button>
    </div>
)}

const mapStateToProps = (state:any) => ({ 
    counter: state.counter.counter, 
    level: state.level.level, 
    overdrive: state.counter.overdrive,
});

const mapDispatchToProps = (dispatch:any) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
      easy: () => dispatch({ type: 'EASY' }),
      medium: () => dispatch({ type: 'MEDIUM' }),
      hard: () => dispatch({ type: 'HARD' }),
      addStar: () => dispatch({type: 'ADD_STAR'}),
      setOverdrive: () => dispatch({type: 'SET_OVERDRIVE'})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Button);