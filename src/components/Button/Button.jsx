import React from 'react';

const Button = ({ onClick, images }) => {
  return (
    images > 0 && (
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    )
  );
};

export default Button;
