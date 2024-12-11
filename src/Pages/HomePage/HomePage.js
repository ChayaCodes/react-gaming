import React from 'react';
import './HomePage.css';
import RainbowButton from '../../components/RainbowBox/RainbowButton';
import OpenPage from './OpenPage';

const HomePage = () => {
  return (
    <div className="bodyIndex">
      <OpenPage />
      <div className="regOrSign">
        <div id="reg">
          <h1 className="had">היכנס או הירשם</h1>
          <RainbowButton>הרשמה</RainbowButton>
          <RainbowButton>כניסה</RainbowButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;