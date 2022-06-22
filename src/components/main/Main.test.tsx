import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from './Main';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Tests for Main component', () => {
  it('should render Counter component', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
