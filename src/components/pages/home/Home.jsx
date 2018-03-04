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
		this.state = { topics: [], category: 'all'};
		this.displayCategory = this.displayCategory.bind(this);
	}

	componentWillMount() {	
		let queries;
		if (this.state.category != 'all') {
			queries = {orderByChild: 'category', equalTo: this.state.category};
		} else {
			queries = {orderByChild: 'created'};
		}
		this.ref = base.fetch('topics', {
			context: this,
			state: 'topics',
			queries: queries,
			then(data) {
				this.setState({topics:data || []});
			}
		});

	}
	displayCategory(category) {
		let queries;
		if (category) {
			queries = {orderByChild: 'category', equalTo: category};
		} else {
			queries = {orderByChild: 'created'};
		}
		this.ref = base.fetch('topics', {
			context: this,
			state: 'topics',
			queries: queries,
			then(data) {
				this.setState({topics:data || []});
			}
		});
	}
	render() {
		const { topics } = this.state;
		const { isLoggedIn } = this.props;
		return (
			<div id="home">
	          <div className="content" >
	          		<div className="container">
	          				<div className="left">
	          					<SearchFilter categories={categories} page="home" isLoggedIn={ isLoggedIn } displayCategory={this.displayCategory}/> 
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