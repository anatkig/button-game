import './counter.css';
import { connect } from 'react-redux';
import { State } from '../../types/types';

const Counter = ({ counter }: { counter: number }) => {
  return (
    <div id='counter'>
      <p>{counter}</p>
    </div>
  );
};
const mapStateToProps = (state: State) => ({
  counter: state.counter.counter,
  overdrive: state.counter.overdrive
});

export default connect(mapStateToProps)(Counter);
