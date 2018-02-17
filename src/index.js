import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

//Styles
import './css/styles.css'

//Components
import Home from './components/pages/home/Home.jsx';
import Post from './components/pages/post/Post.jsx';
import Login from './components/pages/login/Login';
import NewTopic from './components/pages/newtopic/NewTopic';
import NotFound from './components/pages/404/notfound.jsx';

const Root = () => {
	const isLoggedIn = true;
	return (
		<BrowserRouter>
			<div className="page">
				<Match exactly pattern="/" render={ () => <Home isLoggedIn={ isLoggedIn } /> } />
				<Match pattern="/post/:postId" render={(params) => <Post params={ params } isLoggedIn={ isLoggedIn } /> } />
				<Match exactly pattern="/login" component={Login} />
				<Match exactly pattern="/new" render={ () => <NewTopic isLoggedIn={ isLoggedIn } /> } />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	);
};




ReactDOM.render(<Root />, document.querySelector('#root'));
//registerServiceWorker();
