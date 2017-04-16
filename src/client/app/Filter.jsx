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
			filteredActivities: [],
			popularity: ['Most Visited', 
									'Least Visited'],
			parks: []
		}
	}

  componentDidMount(){
	    // axios.get('/api/parks', {
	    //     params: {
	    //       parkcode: this.props.match.params.code
	    //     }
	    //   })
	    //   .then(res => {
	    //     this.setState({ park: res.data[1][0], activities: res.data[0]});
	    //     console.log(res.data);
	    //     })
	    //   .catch(err => console.log(err))
  }

	render () {
		return (
			<div>
						<ProductCategoryRow category={'Activities'}/>
						<div>test</div>
						{this.state.activities.map((category) => <FilterRow onClick={this.props.handleClick} category={category}/>)}
						<ProductCategoryRow category={'Popularity'}/>
						{this.state.popularity.map((category) => <FilterRow onClick={this.props.handleClick} category={category}/>)}
			</div>
		)
	}
}

export default Filter;
