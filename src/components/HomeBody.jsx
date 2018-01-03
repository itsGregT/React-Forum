import React, { Component } from 'react';
import '../css/styles.css';
import TopicCard from './TopicCard';



class HomeBody extends Component {
	constructor(props) {
		super(props);
		this.topics = this.props.topics;
	}
  render() {
    return (
        <div className="page" style={ {height: "80vh" } }>
          <div className="content">
          		<div className="container" style={{ maxWidth:'1050px', margin:'auto'}}>
          				{this.topics.map((topic) => {
          					return (
          						<TopicCard key={topic.title} topic={topic}/>
          					)
          				})}
          		</div>
          </div>
        </div>
    );
  }
}

export default HomeBody;