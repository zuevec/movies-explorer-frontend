import React from 'react';
import './MoreButton.css';

const MoreButton = () => {
  return (
    <div className="morebutton">
      <a href="#about" className="morebutton__link">
        <button className="morebutton__button">Узнать больше</button>
      </a>
    </div>
  );
};

export default MoreButton;
