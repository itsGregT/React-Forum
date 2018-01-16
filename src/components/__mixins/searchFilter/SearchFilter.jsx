import React, { Component } from 'react';
import FilterCategory from '../filterCategory/filterCategory';
import './css/filter.css';

class SearchFilter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { categories } = this.props;
		return(
			<div className="search-filter">
				<h5>Select a Category</h5>
				<ul>
					{this.props.categories.map((category) => {
						return <FilterCategory key={Math.random()} category={category} />
					})			
					}
				</ul>
			</div>
		)
	}
}

export default SearchFilter;