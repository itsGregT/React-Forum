import React, { Component } from 'react';
import '../../css/header.css';

class Navigation extends Component {
	render() {
		return(
			<nav>
				<a href="#">Home</a>
				<a href="#">Community</a>
				<a href="#">About</a>
			</nav>
		);
	}
}

export default Navigation;