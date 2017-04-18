import React from 'react';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import FilterRow from './FilterRow.jsx';
import axios from 'axios';
import Promise from 'bluebird';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, List, Accordion } from 'semantic-ui-react';

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
			parks: [],
			visible: false
		}
	}

  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

	render () {
		return (
			<div>
			   <Button onClick={this.toggleVisibility.bind(this)}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <List>
              <List.Header>Activities</List.Header>
              {this.state.activities1.map((category) => <FilterRow onClick={this.props.handleActivitiesClick} category={category}/>)}
              </List>
              <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      See All Activities
    </Accordion.Title>
 
    </Accordion.Content>
    </Accordion>
            </Menu.Item>
            <Menu.Item name='gamepad'>

            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
          <Segment basic>
          </Segment> 
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>

		)
	}
}


			/*<div className='container-fluid'>
			<div className='row'>
			<div className='col-md-2'>
			<List>
			<List.Header>Activities</List.Header>
				{this.state.activities1.map((category) => <FilterRow onClick={this.props.handleActivitiesClick} category={category}/>)}
			</List>
			</div>
			<div className='col-md-2'>
			<List>
			<List.Header className='header-hidden'>PlaceHolder</List.Header>
				{this.state.activities2.map((category) => <FilterRow onClick={this.props.handleActivitiesClick} category={category}/>)}
			</List>
			</div>
			<div className='col-md-2'>
			<List>
			<List.Header className='header-hidden'>PlaceHolder</List.Header>
				{this.state.activities3.map((category) => <FilterRow onClick={this.props.handleActivitiesClick} category={category}/>)}
				</List>
				</div>
				<div className='col-md-2'>
			 <List>
			 <List.Header className='header-hidden'>PlaceHolder</List.Header>
				{this.state.activities4.map((category) => <FilterRow onClick={this.props.handleActivitiesClick} category={category}/>)}
			 </List>
			</div>
			<div className='col-md-2'>
			<List>
			<List.Header>Popularity</List.Header>
			{this.state.popularity.map((category) => <FilterRow onClick={this.props.handleActivitiesClick} category={category}/>)}
			</List>
			</div>
			 </div> 
			 </div>*/

export default Filter;
