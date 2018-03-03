import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import firebaseApp from './firebase';
import firebase from 'firebase';
//Styles
import './css/styles.css'

//Template parts
import Header from './components/__templateParts/header/Header';
import Footer from './components/__templateParts/footer/Footer';

//Components
import Home from './components/pages/home/Home.jsx';
import Post from './components/pages/post/Post.jsx';
import NewTopic from './components/pages/newtopic/NewTopic';
import NotFound from './components/pages/404/notfound.jsx';


firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
  		let currentUser = {
  			authorName: user.displayName,
  			authorAvatar: user.photoURL,
  			uid: user.uid
  		};
		const Root = () => {
			const isLoggedIn = true;
			return (
				<BrowserRouter>
					<div className="page">
						<Header user={currentUser} />	
						<Match exactly pattern="/" render={ () => <Home isLoggedIn={ isLoggedIn } user={currentUser} /> } />
						<Match pattern="/post/:postId" render={(params) => <Post params={ params } isLoggedIn={ isLoggedIn } user={currentUser}/> } />
						<Match exactly pattern="/new" render={ () => <NewTopic isLoggedIn={ isLoggedIn } user={currentUser}/> } />
						<Miss component={NotFound} />
						<Footer />
					</div>
				</BrowserRouter>
			);
		};
		ReactDOM.render(<Root />, document.querySelector('#root'));
  } else {
		const Root = () => {
			const isLoggedIn = false;
			return (
				<BrowserRouter>
					<div className="page">
						<Header />	
						<Match exactly pattern="/" render={ () => <Home isLoggedIn={ isLoggedIn } /> } />
						<Match pattern="/post/:postId" render={(params) => <Post params={ params } isLoggedIn={ isLoggedIn } /> } />
						<Miss component={NotFound} />
						<Footer />
					</div>
				</BrowserRouter>
			);
		};
		ReactDOM.render(<Root />, document.querySelector('#root'));
  }
});



//registerServiceWorker();
