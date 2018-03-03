import React, { Component } from 'react';
import './css/topicrow.css';
import defGm from './img/forum_img.png';
import brdGm from './img/boardgame-icon.png';
import CardGm from './img/card-icon.png';
import PcGm from './img/pc-icon.png';
import ConsGm from './img/console-icon.png';
import HandGm from './img/freepik.jpg';

import base from '../../../base';

class TopicRow extends Component {
	constructor() {
		super();
		this.categoryImg = this.categoryImg.bind();
		this.state = { users: [ {post: 0 } ] }
	}
	categoryImg(category) {
		switch (category) {
			case 'Board Games':
				return brdGm;
			case 'Card Games':
				return CardGm;
			case 'PC Games':
				return PcGm;
			case 'Console Games':
				return ConsGm;
			case 'Handheld Games':
				return HandGm;
			default:
				return defGm;
		}
	}
	
	render() {
		const { topic, since, createdDate, createdTime, topicId } = this.props;
		const posts  = this.state.users[0].posts;
		return (
			<div className="topic">
					<div className="row-left">
						<div className="topic-title">
							<a href={`post/${topicId}`}>
								<img src={this.categoryImg(topic.category)} alt="" />
								<h3>{topic.title}</h3>
							</a>
						</div>
						<div className="topic-content">
							<div className="topic-info">
								<p><span className="topic-info-title">Category: </span>{ topic.category }</p>
								<p><span className="topic-info-title">Created: </span>{ createdDate } { createdTime }</p>
							</div>
							<div className="topic-description">
								<p>{topic.text}</p>
							</div>
						</div>
					</div>
					<div className="row-right">
						<div className="author-avatar">
							<img src={topic.authorAvatar} alt="" />
						</div>
						<div className="topic-meta">
							<p>
								By: <span className="author">{topic.authorName} </span>
							</p>
							<p>
								Status: <span className="author">Veteran</span>
							</p>
							<p>
								Posts: <span className="author">{ posts} </span>
							</p>
							<p>
								Member Since: <span className="date">{ since }</span>
							</p>
						</div>
					</div>
				<div className="fl_c" />
			</div>
		);
	}
}

export default TopicRow;
