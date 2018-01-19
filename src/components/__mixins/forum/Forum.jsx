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
			this.arrow.style.transform = 'rotateZ(-90deg) translate(10%, 40%)';
		} else {
			this.arrow.style.transform = 'rotateZ(0deg) translate(20%, 0%)';
		}
	}
	componentDidMount() {

	}
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
						let date = new Date(topic.created);
						let since = date.getMonth()+1 + '/' + date.getDate() + '  ' + date.getFullYear();
						let createdDate = date.getMonth()+1 + '/' + date.getDate() + ' ' + date.getFullYear();
						let createdTime = date.getHours() + ':' + date.getMinutes();	
						return <TopicRow key={Math.random()} topic={topic} since={ since } createdTime={ createdTime }  createdDate={ createdDate }/>;
					})}
				</div>
			</div>
		);
	}
}

export default Forum;
