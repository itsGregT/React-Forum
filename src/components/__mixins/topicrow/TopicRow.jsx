import React, { Component } from 'react';
import './css/topicrow.css';
import img1 from './img/forum_img.png';
import img2 from './img/coolcat.png';
import img3 from './img/freepik.jpg';

class TopicRow extends Component {
	constructor() {
		super();
		this.categoryImg = this.categoryImg.bind();
	}
	categoryImg(category) {
		switch (category) {
			case 'code':
				return img2;
			case 'other':
				return img3;
			default:
				return img1;
		}
	}
	render() {
		const { topic } = this.props;
		//console.log(topic);
		return (
			<div className="topic">
				<div className="row-left">
					<img src={this.categoryImg(topic.category)} alt="" />
				</div>
				<div className="row-middle">
					<div className="topic-title">
						<h3>{topic.title}</h3>
					</div>
					<div className="topic-description">
						<p>{topic.text}</p>
					</div>
				</div>
				<div className="row-right">
					<div className="author-avatar">
						<img src={topic.author_avatar} alt="" />
					</div>
					<div className="topic-meta">
						<p>
							By: <span className="author">{topic.author} </span>
						</p>
						<p>
							Status: <span className="author">Veteran</span>
						</p>
						<p>
							Posts: <span className="author">{10} </span>
						</p>
						<p>
							Member Since: <span className="date">{topic.date}</span>
						</p>
					</div>
				</div>
				<div className="fl_c" />
			</div>
		);
	}
}

export default TopicRow;
