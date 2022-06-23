import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import ButtonContainer from './ButtonContainer';

describe('Tests for ButtonContainer component', () => {
  it('should render ButtonContainer component', () => {
    render(
      <Provider store={store}>
        <ButtonContainer />
      </Provider>
    );
    expect(screen.getByText('Press')).toBeInTheDocument();
  });

  it('should handle increasing counter in the store', () => {
    const storeCounter = store.getState().counter.counter;
    render(
      <Provider store={store}>
        <ButtonContainer />
      </Provider>
    );
    const button = screen.getByText('Press');
    fireEvent.click(button);
    expect(store.getState().counter.counter).toBeGreaterThan(storeCounter);
  });

  it('should decrement counter every second after 10 seconds wait', async () => {
    render(
      <Provider store={store}>
        <ButtonContainer />
      </Provider>
    );
    await waitFor(() =>
      setTimeout(() => {
        let counter = store.getState().counter.counter;

        const interval = setInterval(() => {
          const newCounter = store.getState().counter.counter;

          expect(counter).toBeGreaterThan(newCounter);
          counter = newCounter;

          if (counter === 0) clearInterval(interval);
        }, 1000);
      }, 10000)
    );
  });
});
