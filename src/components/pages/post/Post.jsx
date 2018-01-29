import React, { Component } from 'react';
import Header from '../../__templateParts/header/Header';
import Footer from '../../__templateParts/footer/Footer';
import SearchFilter from '../../__mixins/searchFilter/SearchFilter';
import base from '../../../base';
import categories from '../../../categories.json';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = { post: {created: 'loading'}};
		this.Id = this.props.params.postId;
	}	
	componentWillMount() {
		this.ref = base.bindToState('topics', {
			context: this,
			state: 'post',
			queries: {
				orderByKey: 'topics',
				equalTo: this.Id,
				}
		});
	}
	render() {
		const post = this.state.post[this.Id];
		let createdDate = '';
		let createdTime = '';
		if (this.state.post.created !== 'loading' && post && post.hasOwnProperty('created') ) {
			let date = new Date(post.created);
			createdDate = date.getMonth()+1 + '/' + date.getDate() + ' ' + date.getFullYear();
			createdTime = date.getHours() + ':' + date.getMinutes();	
		}
		console.log(createdDate);
		console.log(createdTime);
		console.log(post);
		return (
			<div>
			<Header />
			<div className="content" >
	          	<div className="container">
					<div className="left">
						<SearchFilter categories={categories} /> 
					</div>
					<div className="right">
						<div className="article">  			
							<div className="article-content">
								<h1>15 Web Design Trends in 2018</h1>
								<h1 className="article-subheader">It’s 2018, a new year to explore more in Web Designs.</h1>
									<img src="https://static.pexels.com/photos/436775/pexels-photo-436775.jpeg" alt=""/>
									<p>You’re a designer looking around for inspirations and trends? Then you have come to right place.</p>
									<h2>1. Minimal and Comfort</h2>
									<p>Less is More: Minimalism trend continues with even more blank spaces. Especially white spaces for a clean, multipurpose versatile design.</p>
									<p>Comfort is achieved through slow but detailed Animations. Short but Focused bold content on the screen. This makes sure the visitor gets your message at the very first sight.</p>
									<p>As you already know — First impression lasts longer.</p>
									<h2>2. Futuristic Designs</h2>
									<p>While scrolling through top designs I daily come across at least one work showing great technology or big data visualisation. Data points have grown up to 20X since last 2–3 years, making it hard to analyse. But we solution, thanks to JS.</p>
									<h2>3. Custom Illustrations and Videos</h2>
									<p>An image conveys a message worth a thousand words. Along with it they save space and arose user interest.</p>
									<p>According to a study dwell time on site increase by 100 percent on pages with at least one image or videos on them.</p>
									<p>More impressively, shoppers are 85 percent more likely to purchase a product after watching its demo.</p>
									<p>If you want an example, check Invision’s youtube channel. They upload a new demo video of their latest product in design space — “Invision Studio”.</p>
									<h2>...</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fl_c"></div>
			<Footer />
			</div>
		)
	}
}

export default Post;