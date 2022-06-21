import React from 'react';
import './overdriveTimer.css';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { State, AppDispatch } from '../types/types';
import { EASY,MEDIUM, CANCEL_OVERDRIVE } from '../constants/constants';

const OverdriveTimer = ({
  cancelOverdrive,
  level
}: {
  cancelOverdrive: ()=> { type: string; };
  level: string;
}) => {
  const [seconds, setSeconds] = useState(
    level === EASY ? 15 : level === MEDIUM ? 10 : 5
  );

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    seconds <= 0 && cancelOverdrive();
    return () => clearInterval(timer as NodeJS.Timer);
  }, [seconds, cancelOverdrive]);

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
  cancelOverdrive: () => dispatch({ type: CANCEL_OVERDRIVE })
});

export default connect(mapStateToProps, mapDispatchToProps)(OverdriveTimer);
