import React, { Component } from 'react';


const Navigation = (props) => {
	return(
		<nav>
			<a href="/home">Home</a>
			<a href="/community">Community</a>
			<a href="/about">About</a>
			<a className="login" onClick={props.login} style={{cursor: 'pointer'}}>{ props.user && 'Logout' || 'Login'}</a>
		</nav>
	);
}


export default Navigation;