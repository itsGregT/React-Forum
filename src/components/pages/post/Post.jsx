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
		super(props);;
		this.Id = this.props.params.params.postId;
		const defaultState = { 
								post: {},
								comments: {} 

							};
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
		this.topicRef = base.bindToState('topics', {
			context: this,
			state: 'post',
			queries: {
				orderByKey: 'topics',
				equalTo: this.Id
			}
		});
		this.commentRef = base.bindToState('comments', {
			context: this,
			state: 'comments',
			queries: {
			orderByChild: 'topicId',
				equalTo: this.Id
			}
		});
	}
	comment() {
		const time = Date.now();
 		const input = {
 			text: this.respText.value,
 			authorAvatar: this.props.user.authorAvatar,
 			authorName: this.props.user.authorName,
 			topicId:this.Id,
 			posted: time
 		}
		
  		this.postRef = base.push('comments', {
		    data: input
		  }).then(newLocation => {
		    let generatedKey = newLocation.key;
		  }).catch(err => {
		    //handle error
		  });
		 
		this.setState({respond:'', reply:false, replyStyleInit: {display: 'none' }});	
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
		return (
			<div>
				<div className="content">
					<div className="content">
						<div className="container">
							<div className="left">
								<SearchFilter categories={categories} page="post" isLoggedIn={ this.props.isLoggedIn } />
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
										<p>Created: {createdDate}</p>
									</div>
									<div className="fl_c" />
								</div>
								{ Object.keys(this.state.comments).map( (comment, key) => { return <PostComment key={key} comment={this.state.comments[comment]} /> } ) }
								
								<PostReply />
							</div>
							
							
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Post;
