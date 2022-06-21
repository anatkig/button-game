import React from 'react';
import './counter.css';
import { connect } from 'react-redux';
import OverdriveTimer from '../overdriveTimer/OverdriveTimer';
import { State } from '../types/types';

const Counter = ({
  counter,
  overdrive
}: {
  counter: number;
  overdrive: boolean;
}) => {
  return (
    <div id='counter'>
      {overdrive && <OverdriveTimer />}
      <p>{counter}</p>
    </div>
  );
};
const mapStateToProps = (state: State) => ({
  counter: state.counter.counter,
  overdrive: state.counter.overdrive
});


export default connect(mapStateToProps)(Counter);
