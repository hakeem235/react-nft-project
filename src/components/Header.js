import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitcIcon from "../assets/header/theme-switch.png"

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="logo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <input
          type="text"
          placeholder="Collection, item or user ..."
          className="searchInput"
        />
      </div>

      <div className='headerItems'>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
      </div>

      <div className='headerAction'>
          <div className='themeSwitchContainer'>
              <img src={themeSwitcIcon} alt="themeSwitcIcon" />
          </div>
      </div>
      <div className='loginButton'>GET IN</div>

    </div>
  );
};

export default Header;
