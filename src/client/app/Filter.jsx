import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import FilterRow from './FilterRow.jsx';
import axios from 'axios';
import Promise from 'bluebird';

class Filter extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activities: [
									'Any', 
									'Auto Touring', 
									'Biking', 
									'Climbing', 
									'Fishing', 
									'Horseback Riding', 
									'Hiking', 
									'Wildlife Viewing', 
									'Photography', 
									'Camping', 
									'Boating', 
									'Swimming', 
									'Diving', 
									'Hunting', 
									'Paddling', 
									'Interpretive Programs', 
									'Picnicking', 
									'Snorkeling', 
									'Water Sports', 
									'Visitor Center', 
									'Horse Camping'
									],
			popularity: ['Most Visited', 
									'Least Visited'],
			parks: []
		}
	}

	render () {
		return (
			<div>
						<ProductCategoryRow category={'Activities'}/>
						{this.state.activities.map((category) => <FilterRow onClick={this.props.handleClick} category={category}/>)}
						<ProductCategoryRow category={'Popularity'}/>
						{this.state.popularity.map((category) => <FilterRow onClick={this.props.handleClick} category={category}/>)}
			</div>
		)
	}
}

export default Filter;
