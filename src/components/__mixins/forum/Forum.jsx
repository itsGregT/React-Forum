import React, { Component } from 'react';
import TopicRow from '../topicrow/TopicRow';

//Styles import
import './css/forum-styles.css';

class Forum extends Component {
	constructor(props) {
		super(props);
		this.expand = this.expand.bind();
	}
	expand(com) {
		if (com.forumContent.clientHeight > 0) {
			com.forumContent.style.height = 0 + 'px';
			com.changeBtn('down');
		} else {
			com.forumContent.style.height = 'auto';
			com.changeBtn();
		}
	}
	changeBtn(position) {
		if (position === 'down') {
			this.arrow.style.transform = 'rotateZ(0deg) translateY(0)';
		} else {
			this.arrow.style.transform = 'rotateZ(180deg) translateY(20%)';
		}
	}
	componentDidMount() {}
	render() {
		const { topics } = this.props;
		return (
			<div className="forum">
				<div className="forum-header">
					<div className="forum-title">
						<h2>Forum Component</h2>
					</div>
					<div ref={input => (this.arrow = input)} className="arrors" onClick={() => this.expand(this)}>
						<div className="leftArrow" />
						<div className="rightArrow" />
					</div>
				</div>
				<div className="fl_c" />
				<div ref={input => (this.forumContent = input)} className="forum-content">
					{topics.map(topic => {
						return <TopicRow key={Math.random()} topic={topic} />;
					})}
				</div>
			</div>
		);
	}
}

export default Forum;
