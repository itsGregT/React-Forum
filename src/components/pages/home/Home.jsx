import React, { Component } from 'react';
import SearchFilter from '../../__mixins/searchFilter/SearchFilter';

//Template parts
import Header from '../../__templateParts/header/Header';
import Footer from '../../__templateParts/footer/Footer';
import TopicRow from '../../__mixins/topicrow/TopicRow';
import Forum from '../../__mixins/forum/Forum';

//Data
import topics from '../../../topics.json';
import categories from '../../../categories.json';



class Home extends Component {
	constructor() {
		super();	
	}
	componentWillMount() {	
		this.setState({topics});
	}
	render() {
		return (
			<div id="home">
				<Header />	
          <div className="content" >
          		<div className="container" style={{ maxWidth:'1200px', margin:'auto', minHeight: '600px'}}>
          				<div className="left">
          					<SearchFilter />
          				</div>
          				<div className="right">
          					<Forum topics={topics} />
          				</div>

          		</div>
          </div>
				<Footer />
			</div>
		)
	}
}

export default Home;