import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../css/FrontPage.css';
import logo from '../assets/logo10.png';

import leftImage from '../assets/leftImge2.svg';

import React from 'react';

function FrontPage() {
  return (
    <div className="landingContainer">
      <img src={logo} alt="logo" className="logoLand" />
      {/* <button className="conatactUs">Contact us</button> */}

      <div className="textContainer">
        <span className="landingTitle-brand"> LawLinker </span>
        <span className="landingTitle-title">
          {' '}
          Your Legal Ally, Powered by AI
        </span>
        <span className="desc">
          {' '}
          <br />
          Welcome to LawLinker, your virtual legal companion powered by the
          latest <span className="temp">AI technology</span>. LawLinker is your
          one-stop solution for simplifying the legal process and providing you
          with valuable insights into your case future
        </span>
      </div>

      <span className="descLanding"></span>
      <div className="imgContainer">
        <img src={leftImage} alt=" -image" className="leftImage" />
      </div>

      <span className="qtext">Are you Client or Attoreny?</span>

      <a href="/client">
        <button className="landingButton">Client</button>
      </a>

      <a href="/attorney">
        <button className="landingButtonAtt">Attorney</button>
      </a>
    </div>
  );
}

export default FrontPage;
