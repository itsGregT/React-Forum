import React, { Component } from 'react';
import { Redirect } from 'react-router';
import SearchFilter from '../../__mixins/searchFilter/SearchFilter';
import base from '../../../base';

//Template parts
import Header from '../../__templateParts/header/Header';
import Footer from '../../__templateParts/footer/Footer';


class NewTopic extends Component {
	constructor() {
		super();
		this.post = this.post.bind(this);
		this.state = {redirect:null, url: null }
	}
	post() {
		const created = Date.now();
		const input = {
			authorAvatar: '',
			authorName: '',
			created: created,
			title: this.title.value,
			text: this.text.value,
			category: this.category.value,
		}
  		this.postRef = base.push('topics', {
		    data: input
		  }).then(newLocation => {
		  	let generatedKey = newLocation.key;
		  	this.setState({redirect: true, url:/post/+generatedKey});    
		  }).catch(err => {
		    //handle error
		  });
	}
	render() {
		if(this.props.isLoggedIn) {
			if (this.state.redirect)  return (<Redirect to={this.state.url || '/'} />)
			return (
				<div id="home">
				<Header />	
		          <div className="content" >
		          		<div className="container">
		          				<div className="left">
		          					<SearchFilter categories={[]} page="new" isLoggedIn={ this.props.isLoggedIn } /> 
		          				</div>
		          				<div className="right post-container">
		          					<div className="post-title forum-header">
										<h2>New Topic</h2>
									</div>
									<div className="full-post new-post-body">
										<form>
											<label htmlFor=""><h3>Title:</h3></label>
											<input type="text" name="title" ref={ (input) => { this.title = input } }/>
											<div className="category-select">
												<label htmlFor=""><h3>Category</h3></label>
												<select name="category" id="" ref={ (input) => { this.category = input }}>
													<option value="">Select Category</option>
													<option value="Board Games">Board Games</option>
													<option value="Card Games">Card Games</option>
													<option value="PC Games">PC Games</option>
													<option value="Console Games">Console Games</option>
													<option value="Handheld Games">Handheld Gamess</option>
												</select>
											</div>
											<label htmlFor=""><h3>Text:</h3></label>
											<textarea name="" id="" cols="30" rows="10" ref={ (input) => this.text = input}></textarea>
										</form>
										<button onClick={this.post} className="btn">Post</button>
									</div>
		          				</div>

		          		</div>
		          </div>
		         <div className="fl_c"></div> 
				<Footer />
				</div>
			)
		} else {
			return <Redirect to="/" />
		}
	}
}

export default NewTopic;