import './button.css';

const Button = ({
  handleClick,
  buttonBackground
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonBackground: string;
}) => {
  return (
    <div id='button'>
      <button
        className='app-button'
        onClick={handleClick}
        style={{ backgroundColor: buttonBackground }}
      >
        Button
      </button>
    </div>
  );
};

export default Button;
