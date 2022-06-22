import Button from '../button/Button';
import { connect } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { State, AppDispatch, ButtonBackground } from '../../types/types';
import {
  EASY,
  MEDIUM,
  HARD,
  INCREMENT,
  DECREMENT,
  SET_OVERDRIVE,
  BUTTON_DECREMENT_COLOR,
  BUTTON_INITIAL_COLOR
} from '../../constants/constants';

const ButtonContainer = ({
  counter,
  level,
  increment,
  decrement,
  setOverdrive
}: {
  counter: number;
  level: string;
  increment: () => { type: string };
  decrement: () => { type: string };
  setOverdrive: () => { type: string };
}) => {
  const savedTimeout = useRef({} as NodeJS.Timeout);
  const clickTimes = useRef([] as number[]);
  const [buttonBackground, setButtonBackground] =
    useState<ButtonBackground>(BUTTON_INITIAL_COLOR);
  const [countdown, setCountDown] = useState(false);

  useEffect(() => {
    if (countdown) {
      setButtonBackground(BUTTON_DECREMENT_COLOR);
      const interval =
        counter > 0 &&
        setInterval(() => {
          decrement();
        }, 1000);

      if (counter === 0) {
        setButtonBackground(BUTTON_INITIAL_COLOR);
        setCountDown(false);
      }

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

    if (
      lastClickTimes.length < numClickSecond ||
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
    <Button handleClick={handleClick} buttonBackground={buttonBackground} />
  );
};

const mapStateToProps = (state: State) => ({
  counter: state.counter.counter,
  level: state.level.level
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    setOverdrive: () => dispatch({ type: SET_OVERDRIVE })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);
