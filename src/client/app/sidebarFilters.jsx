import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, List, Accordion } from 'semantic-ui-react';
import FilterRow from './FilterRow.jsx';

class SidebarFilters extends React.Component {
    constructor(props) {
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
      }
    }
    render() {
      return (
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <List>
              <List.Header>Activities</List.Header>
              {this.state.activities1.map((category) => <FilterRow onClick={this.props.handleFilterActivities.bind(this)} category={category}/>)}
              </List>
              <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      See All Activities
    </Accordion.Title>
    <Accordion.Content>
    <List>
      {this.state.activities2.map((category) => <FilterRow onClick={this.props.handleFilterActivities.bind(this)} category={category}/>)}
      {this.state.activities3.map((category) => <FilterRow onClick={this.props.handleFilterActivities.bind(this)} category={category}/>)}
      {this.state.activities4.map((category) => <FilterRow onClick={this.props.handleFilterActivities.bind(this)} category={category}/>)}
      </List>
    </Accordion.Content>
    </Accordion>
            </Menu.Item>
            <Menu.Item name='gamepad'>
             <List>
             <List.Header>Popularity</List.Header>
      {this.state.popularity.map((category) => <FilterRow onClick={this.props.handleFilterActivities.bind(this)} category={category}/>)}
      </List>
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
        )
  }
      
}

export default SidebarFilters;