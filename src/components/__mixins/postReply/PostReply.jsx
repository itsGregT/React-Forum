import React, { Component } from 'react';
import './css/postReply.css';

class PostReply extends Component {
	render(){
		return(
			<form class="reply-form">
				<textarea placeholder="Remember, be nice!"></textarea>
				<input type="submit" class="btn" value="Reply" />
			</form>
		);
	}
}

export default PostReply;