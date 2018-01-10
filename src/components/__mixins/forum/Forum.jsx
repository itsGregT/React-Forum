import React, { Component } from 'react';
import TopicRow from '../topicrow/TopicRow';

//Styles import
import './css/forum-styles.css';

class Forum extends Component {
	constructor(props) {
 		super(props);
	}
	render() {
		const {topics} = this.props;
		return (
			<div className="forum">
				<div className="forum-content">
					<h2>Forum Component</h2>
      				{ 
      					topics.map((topic) => {
									return (
										<TopicRow key={topic.title} topic={topic}/>
									)
								}) 			
      				}
				</div>
			</div>
		)
	}
}

export default Forum;