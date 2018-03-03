import React, { Component } from 'react';
import './css/postcomment.css';

const PostComment = (props) => {
	let date = new Date(props.comment.posted);
	let createdDate = date.getMonth() + 1 + '/' + date.getDate() + ' ' + date.getFullYear();
	let createdTime = date.getHours() + ':' + date.getMinutes();

	return(
		<div className="comment-container">
			<div className="full-comment">
				<div className="right comment">
					{props.comment.text}
				</div>
				<div className="author-info">
					<img src={props.comment.authorAvatar} alt=""/>
					<p>Author: {props.comment.authorName}</p>
					<p>Created: { createdDate }</p>
				</div>
				<div className="fl_c" />
			</div>
		</div>
	);
}


export default PostComment;