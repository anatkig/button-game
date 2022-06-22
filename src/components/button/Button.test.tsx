import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { ButtonBackground } from '../../types/types';
import {
  BUTTON_INITIAL_COLOR,
  BUTTON_DECREMENT_COLOR
} from '../../constants/constants';

describe('Tests for Button component', () => {
  it('should render button component', () => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () =>
      undefined;
    const buttonBackground: ButtonBackground = BUTTON_INITIAL_COLOR;
    render(
      <Button handleClick={handleClick} buttonBackground={buttonBackground} />
    );
    expect(screen.getByText('Press')).toBeInTheDocument();
  });

  it('should change color when buttonBackground prop changes', () => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () =>
      undefined;
    const buttonBackground: ButtonBackground = BUTTON_DECREMENT_COLOR;
    render(
      <Button handleClick={handleClick} buttonBackground={buttonBackground} />
    );
    expect(screen.getByText('Press')).toHaveStyle('background-color: orange');
  });
});
