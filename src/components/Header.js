import React, { useState } from "react";

const Header = ({ handleChange }) => {

  const [term, setTerm] = useState('');

  const keyPressed = e => e.key === 'Enter' ? onSubmit() : null

  const onSubmit = () => {
    handleChange(term)
  }

  return (
    <div className='header'>
      Unsplash Search
      <input 
      type="text"
      onChange={e => setTerm(e.target.value)}
      onKeyPress={keyPressed}
      ></input>
      <button
      onClick={onSubmit}
      >Search</button>
    </div>
  );
};

export default Header;
