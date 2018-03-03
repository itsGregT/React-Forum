import React, { Component } from 'react';
import SearchFilter from '../../__mixins/searchFilter/SearchFilter';
import base from '../../../base';
//Template parts
import Header from '../../__templateParts/header/Header';
import Footer from '../../__templateParts/footer/Footer';
//import TopicRow from '../../__mixins/topicrow/TopicRow';
import Forum from '../../__mixins/forum/Forum';

//Data
import data from '../../../topics.json';
import categories from '../../../categories.json';


class Home extends Component {
	constructor() {
		super();
		this.state = { topics: []};
	}

	componentWillMount() {	
		const oneDay = 86400000;
		const dateNow = Date.now() - (oneDay * 7);
		this.ref = base.bindToState('topics', {
			context: this,
			state: 'topics',
			queries: {
				orderByChild: 'created'
  			}
		});

	}
	componentDidMount() {

	}
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}
	render() {
		const { topics } = this.state;
		const { isLoggedIn } = this.props;
		return (
			<div id="home">
	          <div className="content" >
	          		<div className="container">
	          				<div className="left">
	          					<SearchFilter categories={categories} page="home" isLoggedIn={ isLoggedIn }/> 
	          				</div>
	          				<div className="right">
	          					<Forum topics={ topics } />
	          				</div>

	          		</div>
	          </div>
	         <div className="fl_c"></div> 
			</div>
		)
	}
}

export default Home;