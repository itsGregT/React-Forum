import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

//Styles
import './css/styles.css'

//Components
import Home from './components/Home.jsx';
import TopicCard from './components/TopicCard.jsx';
import NotFound from './components/notfound.jsx';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Home} />
				<Match exactly pattern="/topic-card" component={TopicCard} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	);
};




ReactDOM.render(<Root />, document.getElementById('root'));
//registerServiceWorker();
