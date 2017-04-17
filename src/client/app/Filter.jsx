import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import FilterRow from './FilterRow.jsx';
import axios from 'axios';
import Promise from 'bluebird';
import {List} from 'semantic-ui-react';

class Filter extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activities1: [
									'Any', 
									'Auto Touring', 
									'Biking', 
									'Climbing', 
									'Fishing', 
									'Horseback Riding', 
									],
			activities2: [ 
									'Hiking', 
									'Wildlife Viewing', 
									'Photography', 
									'Camping', 
									'Boating', 
									],
			activities3: [
									'Swimming', 
									'Diving', 
									'Hunting', 
									'Paddling', 
									'Interpretive Programs', 
									],
			activities4: [
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
			<div className='container-fluid'>
			<div className='row'>
			<div className='col-md-2'>
			<List>
			<List.Header>Activities</List.Header>
				{this.state.activities1.map((category) => <FilterRow onClick={this.props.handleClick} category={category}/>)}
			</List>
			</div>
			<div className='col-md-2'>
			<List>
			<List.Header></List.Header>
				{this.state.activities2.map((category) => <FilterRow onClick={this.props.handleClick} category={category}/>)}
			</List>
			</div>
			<div className='col-md-2'>
			<List>
			<List.Header></List.Header>
				{this.state.activities3.map((category) => <FilterRow onClick={this.props.handleClick} category={category}/>)}
				</List>
				</div>
				<div className='col-md-2'>
			 <List>
			 <List.Header></List.Header>
				{this.state.activities4.map((category) => <FilterRow onClick={this.props.handleClick} category={category}/>)}
			 </List>
			</div>
			<div className='col-md-2'>
			<List>
			<List.Header>Popularity</List.Header>
			{this.state.popularity.map((category) => <FilterRow onClick={this.props.handleClick} category={category}/>)}
			</List>
			</div>
			 </div> 
			 </div>
		)
	}
}

export default Filter;
