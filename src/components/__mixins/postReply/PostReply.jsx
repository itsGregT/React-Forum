import React, { Component } from 'react';
import './css/postReply.css';

class PostReply extends Component {
	constructor() {
		super();
		this.post = this.post.bind(this);
	}
	post() {
		this.props.postreply(this.text.value);
		this.text.value = '';
	}
	render() {
		return(
			<div>
				<form className="reply-form">
					<textarea placeholder="Remember, be nice!" ref={(input) => this.text = input}></textarea>
				</form>
				<button className="btn" onClick={ this.post }>Reply</button>
				<div className="fl_c"></div>
			</div>
		);
	}
}

export default PostReply;