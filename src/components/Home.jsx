import React, { Component } from 'react';
import Header from './template/Header';
import HomeBody from './HomeBody';
import Footer from './template/Footer';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<HomeBody />
				<Footer />
			</div>
		)
	}
}

export default Home;