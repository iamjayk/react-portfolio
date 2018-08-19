import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import github from './faIcons/github.svg';
import linkedin from './faIcons/linkedin.svg';

import './main.css';

import AjayLogo from './imgs/ajay.png'


class MainPage extends Component {
  render() {
    return (
      <div>
        <header className="profile-heading">
          <img src={AjayLogo} className="profile-photo" alt="profile-pic" />
          <h1 className="profile-title"> Ajay Kumar</h1>

          <div className="profile-social-icons" style={{ margin: 10}}>
        <a href="https://github.com/ajayk800" target="_blank" rel="noopener noreferrer">
          <img src={github}  alt="" />
        </a>
        <a href="https://linkedin.com/in/ajay-k" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt=""  />
        </a>
        </div>
          <NavBar />
        </header>
      </div>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav className="bs-navbar">
        <ul>
          <Link style={{ color: "white", margin: 5, backgroundColor: "black", fontSize: 15, padding: 10, textDecoration: "none" }} to="/about"> About</Link>
          <Link style={{ color: "white", margin: 5, backgroundColor: "black", fontSize: 15, padding: 10, textDecoration: "none" }} to="/skills"> Skills</Link>
          <Link style={{ color: "white", margin: 5, backgroundColor: "black", fontSize: 15, padding: 10, textDecoration: "none" }} to="/portfolio"> Portfolio</Link>
        </ul>
      </nav>

    )
  }
}

export default MainPage;
