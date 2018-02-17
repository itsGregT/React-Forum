import React, { Component } from 'react';
import './css/postReply.css';

class PostReply extends Component {
	render(){
		return(
			<form>
				<input type="textarea"/>
				<button>Post Reply</button>
			</form>
		);
	}
}

export default PostReply;