import React, { Component } from 'react';
import Header from '../../__templateParts/header/Header';
import Footer from '../../__templateParts/footer/Footer';
import SearchFilter from '../../__mixins/searchFilter/SearchFilter';
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
		this.title = this.props.params.title;
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
		const { topics } = this.props;
		let createdDate = '';
		let createdTime = '';
		if (post.created !== 'loading' && post && post.hasOwnProperty('created')) {
			let date = new Date(post.created);
			createdDate = date.getMonth() + 1 + '/' + date.getDate() + ' ' + date.getFullYear();
			createdTime = date.getHours() + ':' + date.getMinutes();
		}
		console.log(createdDate);
		console.log(createdTime);
		console.log(this.state);
		return (
			<div>
				<Header />
				<div className="content">
					<div className="content">
						<div className="container">
							<div className="left">
								<SearchFilter categories={categories} />
							</div>
							<div className="right post-container">
								<div className="post-title forum-header">
									<h2>This is the post title.</h2>
								</div>
								<div className="full-post">
									<div className="post">
										<div className="post-info">Here is some post information.</div>
										<p>This is the post.</p>
									</div>
									<div className="author-info">
										<p>This is the author</p>
									</div>
									<div className="fl_c" />
								</div>
							</div>
							<div className="fl_c" />
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default Post;
