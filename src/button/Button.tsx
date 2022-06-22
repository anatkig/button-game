import React from 'react';
import './button.css';
import { connect } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { State, AppDispatch } from '../types/types';
import { EASY, MEDIUM, HARD, INCREMENT, DECREMENT, SET_OVERDRIVE } from '../constants/constants';

const Button = ({
  counter,
  level,
  increment,
  decrement,
  setOverdrive,

}: {
  counter: number;
  level: string;
  increment: ()=> { type: string; };
  decrement: ()=> { type: string; };
  setOverdrive: ()=> { type: string; };
}) => {
  const savedTimeout = useRef({} as NodeJS.Timeout);
  const clickTimes = useRef([] as number[]);
  const [buttonBackground, setButtonBackground] = useState('lightgreen');
  const [countdown, setCountDown] = useState(false);

  useEffect(() => {
    if (countdown) {
      setButtonBackground('orange');
      const interval =
        counter > 0 &&
        setInterval(() => {
          decrement();
          if (counter < 0) {
            setButtonBackground('lightgreen');
          }
        }, 1000);

      if (counter === 0) setButtonBackground('lightgreen');

      return () => {
        clearInterval(interval as NodeJS.Timer);
      };
    }
  }, [countdown, counter, decrement]);

  const handleClick = () => {
    let overdriveChance = 10;
    let numClickSecond = 3;

    if (level === EASY) {
      overdriveChance = 3;
      numClickSecond = 5;
    } else if (level === MEDIUM) {
      overdriveChance = 10;
      numClickSecond = 3;
    } else if (level === HARD) {
      overdriveChance = 20;
      numClickSecond = 1;
    }

    const overdriveEvent = Math.floor(Math.random() * overdriveChance) + 1;

    clickTimes.current.push(Date.now());
    const lastClickTimes = clickTimes.current.slice(
      clickTimes.current.length - numClickSecond - 1
    );

      if(lastClickTimes.length <numClickSecond || 
      !(lastClickTimes[lastClickTimes.length - 1] - lastClickTimes[0] <= 1000)
    ) {
      if (overdriveEvent === 1) {
        setOverdrive();
      }
      increment();

      clearTimeout(savedTimeout.current);

      const timeout = setTimeout(() => setCountDown(true), 10000);
      savedTimeout.current = timeout;
    }
  };

  return (
    <div id='button'>
      <button
        className='app-button'
        onClick={handleClick}
        style={{ backgroundColor: buttonBackground }}
      >
        Button
      </button>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  counter: state.counter.counter,
  level: state.level.level,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    setOverdrive: () => dispatch({ type: SET_OVERDRIVE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
