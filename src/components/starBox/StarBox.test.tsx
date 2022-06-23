import React from 'react';
import { render, screen, act } from '@testing-library/react';
import StarBox from './StarBox';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { INCREMENT } from '../../constants/constants';

describe('Tests for StarBox component', () => {
  it('should render StarBox component', () => {
    render(
      <Provider store={store}>
        <StarBox />
      </Provider>
    );
    // the component is completely empty initially
    expect(document.getElementById('star-box')).toBeInTheDocument();
  });

  it('should render a star each type the counter reaches a multiple of 10', () => {
    render(
      <Provider store={store}>
        <StarBox />
      </Provider>
    );
    act(() => {
      for (let i = 0; i < 10; i++) {
        store.dispatch({ type: INCREMENT });
      }
    });
    expect(screen.getByTitle('star')).toBeInTheDocument();
  });
});
