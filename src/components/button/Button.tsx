import './button.css';
import { ButtonBackground } from '../../types/types';

const Button = ({
  handleClick,
  buttonBackground
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonBackground: ButtonBackground;
}) => {
  return (
    <div id='button'>
      <button
        className='app-button'
        onClick={handleClick}
        style={{ backgroundColor: buttonBackground }}
      >
        Press
      </button>
    </div>
  );
};

export default Button;
