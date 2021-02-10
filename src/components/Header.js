// Import React
import React, { useState } from "react";

// Import Style
import './Header.scss'

// Header Component
const Header = ({ handleChange }) => {

  // State Setup
  const [term, setTerm] = useState('');

  // Update Term If Enter Is Pressed
  const keyPressed = e => e.key === 'Enter' ? onSubmit() : null

  // Sends Term Up To App Component
  const onSubmit = () => {
    handleChange(term)
  }

  return (
    <div className='header'>
      <input 
      type="text"
      onChange={e => setTerm(e.target.value)}
      onKeyPress={keyPressed}
      placeholder={'Search for images here...'}
      ></input>
      <button
      onClick={onSubmit}
      >Search</button>
    </div>
  );
};

export default Header;
