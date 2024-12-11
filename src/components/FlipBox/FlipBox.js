import React from 'react';
import './FlipBox.css';

const FlipBox = ({ frontImage, frontText, backText }) => {
  return (
    <div className="flip-box">
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <img src={frontImage} alt={frontText} />
          <h3>{frontText}</h3>
        </div>
        <div className="flip-box-back">
          <h1 className="InactivePage">{backText}</h1>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;