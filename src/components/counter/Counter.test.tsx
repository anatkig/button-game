import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Tests for Counter component', () => {
  it('should render Counter component', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(screen.getByText(/\d/i)).toBeInTheDocument();
  });
});
