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
		this.filteredActivitiesArray = [];
	}

	handleClick (filter, selectedState) {
		return new Promise((resolve, reject) => {
			if (selectedState) {
				this.filteredActivitiesArray.push(filter);
			} else if (!selectedState) {
				const index = this.filteredActivitiesArray.indexOf(filter);
				this.filteredActivitiesArray.splice(index);
			}
			console.log('setState!', this.state.filteredActivities)
			resolve(this.setState({filteredActivities: this.filteredActivitiesArray}))
		}).then(() => {
			axios.get('/filterparks', {
				params: {
					filteredActivities: this.state.filteredActivities
				}
			}).then((response) => {
				console.log('response received!')
				console.log(response);
			}).catch((error) => {
				console.log(error);
			})
		})
		console.log('clicked!')
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
						{this.state.activities.map((category) => <FilterRow onClick={this.handleClick.bind(this)} category={category}/>)}
						<ProductCategoryRow category={'Popularity'}/>
						{this.state.popularity.map((category) => <FilterRow onClick={this.handleClick.bind(this)} category={category}/>)}
			</div>
		)
	}
}

export default Filter;
