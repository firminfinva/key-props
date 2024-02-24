import React, { useState } from 'react';
import './App.css';

export default function Button(props) {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleClick = () => {
    // Toggle background color between white and blue
    setBackgroundColor(backgroundColor === 'white' ? 'blue' : 'white');
  };

  return (
    <button
      style={{ backgroundColor: backgroundColor }}
      onClick={handleClick}
    >
      {props.value}
    </button>
  );
}


