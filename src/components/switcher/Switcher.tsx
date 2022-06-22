import { MouseEventHandler } from 'react';
import './switcher.css';
import { connect } from 'react-redux';
import { State, AppDispatch } from '../../types/types';
import { EASY, MEDIUM, HARD } from '../../constants/constants';

const Switcher = ({
  level,
  easy,
  medium,
  hard
}: {
  level: string;
  easy: MouseEventHandler<HTMLSpanElement>;
  medium: MouseEventHandler<HTMLSpanElement>;
  hard: MouseEventHandler<HTMLSpanElement>;
}) => {
  return (
    <div id='switcher'>
      <div>Choose the level</div>
      <div>
        <span
          className='level app-button'
          onClick={easy}
          style={{ backgroundColor: level === EASY ? 'pink' : undefined }}
        >
          Easy
        </span>
        <span
          className='level app-button'
          onClick={medium}
          style={{ backgroundColor: level === MEDIUM ? 'pink' : undefined }}
        >
          Medium
        </span>
        <span
          className='level app-button'
          onClick={hard}
          style={{ backgroundColor: level === HARD ? 'pink' : undefined }}
        >
          Hard
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = (state: State) => ({
  level: state.level.level
});
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    easy: () => dispatch({ type: 'EASY' }),
    medium: () => dispatch({ type: 'MEDIUM' }),
    hard: () => dispatch({ type: 'HARD' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Switcher);
