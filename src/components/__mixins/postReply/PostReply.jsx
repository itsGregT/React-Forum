import React, { Component } from 'react';
import './css/postReply.css';

class PostReply extends Component {
	render(){
		return(
			<div>
				<form id="reply" className="reply-form">
					<textarea placeholder="Remember, be nice!"></textarea>
					<input type="submit" className="btn" value="Reply" />
				</form>
				<div className="fl_c"></div>
			</div>
		);
	}
}

export default PostReply;