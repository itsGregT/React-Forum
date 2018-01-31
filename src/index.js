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
	return (
		<BrowserRouter>
			<div className="page">
				<Match exactly pattern="/" component={Home} />
				<Match pattern="/post/:postId" component={Post} />
				<Match exactly pattern="/login" component={Login} />
				<Match exactly pattern="/new" component={NewTopic} />

				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	);
};




ReactDOM.render(<Root />, document.querySelector('#root'));
//registerServiceWorker();
