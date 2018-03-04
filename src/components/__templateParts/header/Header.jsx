import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import firebase from 'firebase';
import firebaseApp from '../../../firebase';

import './css/header.css';

class Header extends Component {
  constructor() {
    super();
    this.shrinkHeader = this.shrinkHeader.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.shrinkHeader);
  }

  //shrink the header when scroll down
  shrinkHeader() {
    const header = document.getElementById('header');
    const distanceY = window.pageYOffset;
      if(distanceY > 101) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
  }
  login() {
    if (!this.props.user) {
          var provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('profile');
          provider.addScope('email');

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            // ...
        }).catch(function(error) {
            console.log(error);
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
        });
      } else {
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
      }

  }

  render() {
    return (
      <header id="header">
        <div className='app-header'>
          <a href="/"><h1 className='app-title'>Forum<span>Header</span></h1></a>
        </div>
        <Navigation login={this.login} user={this.props.user}/>
        {this.props.user && <div className="user-avatar"><img src={this.props.user.authorAvatar} alt=""/></div>}
      </header>
    );
  }
}

export default Header;