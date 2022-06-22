import React from 'react';
import { render, screen } from '@testing-library/react';
import OverdriveTimer from './OverdriveTimer';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Tests for OverdriveTimer component', () => {
  it('should render OverdriveTimer component', () => {
    render(
      <Provider store={store}>
        <OverdriveTimer />
      </Provider>
    );
    const timer = new RegExp(/\d/i);
    expect(screen.getByText(timer)).toBeInTheDocument();
  });
});
