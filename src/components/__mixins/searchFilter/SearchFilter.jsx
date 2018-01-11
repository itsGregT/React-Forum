import React, { Component } from 'react';
import './css/filter.css';

class SearchFilter extends Component {
	render() {
		return(
			<div className="search-filter">
				<h5>Select a Category</h5>
				<ul>
					<li>Category 1 <span className="filter-count">(100)</span></li>
					<li>Category 2 <span className="filter-count">(17)</span></li>
					<li>Category 3 <span className="filter-count">(37)</span></li>
					<li>Category 4 <span className="filter-count">(812)</span></li>
					<li>Category 5 <span className="filter-count">(7)</span></li>
				</ul>
			</div>
		)
	}
}

export default SearchFilter;