import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

import AjayLogo from './imgs/ajay.png'

class MainPage extends Component {
  render() {
    return (
      <div>
        <header className="profile-heading">
          <img src={AjayLogo} className="profile-photo" alt="profile-pic" />
          <h1 className="profile-title"> Ajay Kumar</h1>
          <NavBar />
        </header>
      </div>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/about"> About</Link>
          <Link to="/skills"> Skills</Link>
          <Link to="/portfolio"> Portfolio</Link>
        </ul>
      </nav>

    )
  }
}

export default MainPage;
