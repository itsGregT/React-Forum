import React, { Component } from 'react';
import FilterCategory from '../filterCategory/filterCategory';
import './css/filter.css';
import NavigationBnt from '../navigationButtons/navigationBtn';
import base from '../../../base';

class SearchFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {categories: {}}
	}
	componentWillMount() {
		this.ref = base.bindToState('categories', {
			context: this,
			state: 'categories',
			queries: {
				orderByChild: 'count'
  			}
		});
	}
	render() {
		const { categories } = this.props;
		return(
			<div>
				<NavigationBnt page={this.props.page} isLoggedIn={ this.props.isLoggedIn } />
				{ 
					this.props.page == 'home' && (<div className="search-filter">
						<h5>Select a Category</h5>
						<ul>
							{Object.keys(this.state.categories).map((category) => {
								return <FilterCategory key={Math.random()} category={this.state.categories[category]} displayCategory={this.props.displayCategory}/>
							})			
							}
						</ul>
					</div>) 
				}
			</div>
		)
	}
}

export default SearchFilter;