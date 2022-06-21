import React from 'react';
import './overdriveTimer.css';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { State, AppDispatch } from '../types/types';

const OverdriveTimer = ({
  canselOverdrive,
  level
}: {
  canselOverdrive: Function;
  level: string;
}) => {
  const [seconds, setSeconds] = useState(
    level === 'EASY' ? 15 : level === 'MEDIUM' ? 10 : 5
  );

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    seconds <= 0 && canselOverdrive();
    return () => clearInterval(timer as NodeJS.Timer);
  }, [seconds, canselOverdrive]);

  return (
    <div id='overdrive-timer'>
      <p>{seconds}</p>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  level: state.level.level
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  canselOverdrive: () => dispatch({ type: 'CANSEL_OVERDRIVE' })
});

export default connect(mapStateToProps, mapDispatchToProps)(OverdriveTimer);
