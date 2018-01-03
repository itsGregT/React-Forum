import React, { Component } from 'react';
import Navigation from './Navigation'
import '../../css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="app-header">
          <h1 className="app-title">Forum<span>Header</span></h1>
        </div>
        <Navigation />
      </header>
    );
  }
}

export default Header;