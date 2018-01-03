import React, { Component } from 'react';
import Header from './template/Header';
import HomeBody from './HomeBody';
import Footer from './template/Footer';
import topics from '../topics.json';
class Home extends Component {
	constructor() {
		super();	
	}
	componentWillMount() {	
		this.setState({topics});
	}
	render() {
		return (
			<div>
				<Header />
				<HomeBody topics={this.state.topics}/>
				<Footer />
			</div>
		)
	}
}

export default Home;