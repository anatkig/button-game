import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import OverdriveTimer from './OverdriveTimer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { clearInterval } from 'timers';

describe('Tests for OverdriveTimer component', () => {
  it('should render OverdriveTimer component', () => {
    render(
      <Provider store={store}>
        <OverdriveTimer />
      </Provider>
    );

    expect(screen.getByText(/\d/i)).toBeInTheDocument();
  });

  it('should decrement displayed number every second', () => {
    render(
      <Provider store={store}>
        <OverdriveTimer />
      </Provider>
    );

    let displayedNumber = Number(screen.getByText(/\d/i).innerHTML);

    const interval = setInterval(() => {
      const newNumber = Number(screen.getByText(/\d/i).innerHTML);

      expect(displayedNumber).toBeGreaterThan(newNumber);

      displayedNumber = newNumber;

      if (displayedNumber === 0) clearInterval(interval);
    }, 1000);
  });

  it('should set overdrive in store to false after completion', async () => {
    render(
      <Provider store={store}>
        <OverdriveTimer />
      </Provider>
    );

    await waitFor(() => Number(screen.getByText(/\d/i).innerHTML) === 0);

    expect(store.getState().counter.overdrive).toBe(false);
  });
});
