import { connect } from 'react-redux';
import { ReactComponent as Star } from '../../assets/star.svg';
import { useEffect, useRef } from 'react';
import { State, AppDispatch } from '../../types/types';
import { ADD_STAR } from '../../constants/constants';

const StarBox = ({
  stars,
  counter,
  addStar
}: {
  stars: string[];
  counter: number;
  addStar: () => { type: string };
}) => {
  const innerCounter = useRef(0);

  useEffect(() => {
    if (Math.floor(counter / 10) > innerCounter.current && counter !== 0) {
      addStar();
      innerCounter.current = Math.floor(counter / 10);
    }
  }, [counter, addStar]);

  return (
    <div id='star-box'>
      {stars.map((star: string, ind: number) => (
        <Star key={star + ind} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  stars: state.star,
  counter: state.counter.counter
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addStar: () => dispatch({ type: ADD_STAR })
});

export default connect(mapStateToProps, mapDispatchToProps)(StarBox);
