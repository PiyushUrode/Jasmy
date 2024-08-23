import React from 'react';
import "../style/Button2.css";

const Button3 = ({ leftText, rightText }) => {
  return (
    <div className='flex flex-row align-middle w-full px-5 py-5'>
      <button className="custom-button">
        <span className="button-text">{leftText}</span>
        <span className="button-text right">{rightText}</span>
      </button>
    </div>
  );
}

export default Button3;
