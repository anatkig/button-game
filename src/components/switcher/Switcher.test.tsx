import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Switcher from './Switcher';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { EASY, HARD, MEDIUM } from '../../constants/constants';

describe('Tests for Switcher component', () => {
  it('should render Switcher component', () => {
    render(
      <Provider store={store}>
        <Switcher />
      </Provider>
    );
    expect(screen.getByText('Choose the level')).toBeInTheDocument();
  });

  it('should render Switcher buttons', () => {
    render(
      <Provider store={store}>
        <Switcher />
      </Provider>
    );
    expect(screen.getByText('Easy')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Hard')).toBeInTheDocument();
  });

  it('should change state when clicked on the buttons', () => {
    render(
      <Provider store={store}>
        <Switcher />
      </Provider>
    );
    const buttonEasy = screen.getByText('Easy');
    const buttonMedium = screen.getByText('Medium');
    const buttonHard = screen.getByText('Hard');

    fireEvent.click(buttonEasy);
    expect(store.getState().level.level).toBe(EASY);

    fireEvent.click(buttonMedium);
    expect(store.getState().level.level).toBe(MEDIUM);

    fireEvent.click(buttonHard);
    expect(store.getState().level.level).toBe(HARD);
  });
});
