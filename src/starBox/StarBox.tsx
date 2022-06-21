import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Star } from '../assets/star.svg';
import { useEffect } from 'react';
import { State, AppDispatch } from '../types/types';

const StarBox = ({
  stars,
  counter,
  addStar
}: {
  stars: string[];
  counter: number;
  addStar: Function;
}) => {
  useEffect(() => {
    if (counter % 10 === 0 && counter !== 0) addStar();
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
  addStar: () => dispatch({ type: 'ADD_STAR' })
});

export default connect(mapStateToProps, mapDispatchToProps)(StarBox);
