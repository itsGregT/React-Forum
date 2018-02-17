import React, { Component } from 'react';
import Header from '../../__templateParts/header/Header';
import Footer from '../../__templateParts/footer/Footer';
import SearchFilter from '../../__mixins/searchFilter/SearchFilter';
import PostComment from '../../__mixins/postComment/PostComment';
import PostReply from '../../__mixins/postReply/PostReply';
import base from '../../../base';
import categories from '../../../categories.json';

class Post extends Component {
	constructor(props) {
		super(props);
		this.Id = this.props.params.postId;
		const defaultState = { post: {} };
		defaultState.post[this.Id] = {
			topicId: '',
			title: '',
			authorAvatar: '',
			authorId: '',
			authorName: '',
			category: '',
			created: 'loading',
			text: ''
		};
		this.state = defaultState;
	}
	componentWillMount() {
		this.ref = base.bindToState('topics', {
			context: this,
			state: 'post',
			queries: {
				orderByKey: 'topics',
				equalTo: this.Id
			}
		});
	}
	render() {
		const post = this.state.post[this.Id];
		let createdDate = '';
		let createdTime = '';
		if (post.created !== 'loading' && post && post.hasOwnProperty('created')) {
			let date = new Date(post.created);
			createdDate = date.getMonth() + 1 + '/' + date.getDate() + ' ' + date.getFullYear();
			createdTime = date.getHours() + ':' + date.getMinutes();
		}
		console.log(createdDate);
		console.log(createdTime);
		console.log(post);
		return (
			<div>
				<Header />
				<div className="content">
					<div className="content">
						<div className="container">
							<div className="left">
								<SearchFilter categories={categories} page="post" />
							</div>
							<div className="right post-container">
								<div className="post-title forum-header">
									<h2>{post.title}</h2>
								</div>
								<div className="full-post">
									<div className="post">
										<div className="post-info">Topic: {post.category}</div>
										<p>{post.text}</p>
									</div>
									<div className="author-info">
										<img src={post.authorAvatar} alt=""/>
										<p>Author: {post.authorName}</p>
										<p>Created: {post.created}</p>
									</div>
									<div className="fl_c" />
								</div>
								<PostComment />
								<PostReply />
							</div>
							
							
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default Post;
