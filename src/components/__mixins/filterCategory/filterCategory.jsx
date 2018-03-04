import React, { Component } from 'react';

const FilterCategory = (props) => {
		const { category } = props;
		return (
			<li onClick={() => props.displayCategory(category.name) } >{category.name}<span className="filter-count">({category.count})</span></li>
		)
}

export default FilterCategory