import React from 'react';
import { Sidebar, Segment, Button, Menu, Icon, List, Grid } from 'semantic-ui-react';
import FilterRow from './FilterRow.jsx';
import { connect } from 'react-redux';
import {showFilters} from '../actions/actions.js'


class SidebarFilters extends React.Component {

  render() {
    return (
      <Grid className={`filtersGrid`} columns={6} stretched={false} >
         <Grid.Row color={'Black'} className={`filtersGridRow`} >   
           <Grid.Column stretched={false} className={`filtersGridColumn`}> <List.Header>Popularity</List.Header></Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> <List.Header>Activities</List.Header></Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
          </Grid.Row>
         <Grid.Row color={'Black'} className={`filtersGridRow`} >   
            {this.props.popularity.slice(0, 1).map((filter) =><Grid.Column stretched={false} className={`filtersGridColumn`}>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name} category={'Popularity'}/> </Grid.Column>)}
            {this.props.filters.slice(0, 5).map((filter) =><Grid.Column >  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name} category={'Activities'}/> </Grid.Column> )}
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
          </Grid.Row>
         <Grid.Row color={'Black'} className={`filtersGridRow`} >    
            {this.props.popularity.slice(1, 2).map((filter) =><Grid.Column stretched={false} className={`filtersGridColumn`}>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name} category={'Popularity'}/> </Grid.Column>)}
            {this.props.filters.slice(5, 10).map((filter) =><Grid.Column stretched={false} className={`filtersGridColumn`}>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name}/> </Grid.Column> )}
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
          </Grid.Row>
         <Grid.Row color={'Black'} className={`filtersGridRow`} >    
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
            {this.props.filters.slice(10, 15).map((filter) =><Grid.Column stretched={false} className={`filtersGridColumn`}>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name}/> </Grid.Column> )}
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
          </Grid.Row>
         <Grid.Row color={'Black'} className={`filtersGridRow`} >    
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
            {this.props.filters.slice(15, 20).map((filter) =><Grid.Column stretched={false} className={`filtersGridColumn`}>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name}/> </Grid.Column> )}
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
          </Grid.Row>
         <Grid.Row color={'Black'} className={`filtersGridRow`} >    
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
            {this.props.filters.slice(20, 22).map((filter) =><Grid.Column stretched={false} className={`filtersGridColumn`}>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name}/> </Grid.Column> )}
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
           <Grid.Column stretched={false} className={`filtersGridColumn`}> </Grid.Column>
          </Grid.Row>
      </Grid>

      
    )
  }
      
}


const mapStateToProps = (state) => {
  return {
      filters: state.updateFiltersSelections.activities,
      popularity: state.updateFiltersSelections.popularity,
  };
};

export default connect(mapStateToProps)(SidebarFilters)
