import React from 'react';

interface ButtonProps {
  name: string;
  handleClick?: (value: any, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ name, handleClick }) => {
  const turqoise = '#63e2c6';

  const handleClickInternal = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Call the external handleClick with the value and the event
    if (handleClick) {
      handleClick(name, event);
    }
  };

  return (
    <button onClick={handleClickInternal} className={`outline outline-[${turqoise}] rounded-md w-3/4`}>
      <span className="text-3xl">{name}</span>
    </button>
  );
};

export default Button;
