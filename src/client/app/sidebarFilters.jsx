import React from 'react';
import { Grid } from 'semantic-ui-react';
import FilterRow from './FilterRow.jsx';
import { connect } from 'react-redux';
import {showFilters} from '../actions/actions.js'


class SidebarFilters extends React.Component {


  render() {


    return (
      
      <Grid className='filtersGrid' columns={6} stretched={false} >
         <Grid.Row color={'Black'} className='filtersGridRow' >   
           <Grid.Column stretched={false} width={2} > <div className='filterHeader column-one' >Popularity</div></Grid.Column>
           <Grid.Column stretched={false} width={2} > <div className='filterHeader column-two' >Activities</div></Grid.Column>
           <Grid.Column stretched={false} width={2} className='filtersGridColumn'> </Grid.Column>
           <Grid.Column stretched={false} width={2} className='filtersGridColumn'></Grid.Column>
           <Grid.Column stretched={false} width={2} className='filtersGridColumn'> </Grid.Column>
           <Grid.Column stretched={false} width={2} className='filtersGridColumn'> </Grid.Column>
          </Grid.Row>
         <Grid.Row color={'Black'} className='filtersGridRow' >   
            {this.props.popularity.slice(0, 1).map((filter) =><Grid.Column width={2} className='filtersGridColumn column-one'>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name} category={'Popularity'}/> </Grid.Column>)}
            {this.props.filters.slice(0, 5).map((filter) =><Grid.Column width={2} >  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name} category={'Activities'}/> </Grid.Column> )}
           <Grid.Column stretched={false} width={2} className='filtersGridColumn'> </Grid.Column>
           <Grid.Column stretched={false} width={2} className='filtersGridColumn'> </Grid.Column>
          </Grid.Row>
         <Grid.Row  color={'Black'} className='filtersGridRow' >    
            {this.props.popularity.slice(1, 2).map((filter) =><Grid.Column width={2} stretched={false} className='filtersGridColumn column-one'>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name} category={'Popularity'}/> </Grid.Column>)}
            {this.props.filters.slice(5, 10).map((filter) =><Grid.Column width={2} stretched={false} className='filtersGridColumn'>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name}/> </Grid.Column> )}
           <Grid.Column width={2} stretched={false} className='filtersGridColumn'> </Grid.Column>
           <Grid.Column width={2} stretched={false} className='filtersGridColumn'> </Grid.Column>
          </Grid.Row>
         <Grid.Row color={'Black'} className='filtersGridRow' >    
           <Grid.Column stretched={false} width={2} className='filtersGridColumn column-one'> </Grid.Column>
            {this.props.filters.slice(10, 15).map((filter) =><Grid.Column width={2} stretched={false} className='filtersGridColumn'>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name}/> </Grid.Column> )}
           <Grid.Column stretched={false} width={2} className='filtersGridColumn'> </Grid.Column>
           <Grid.Column stretched={false} width={2} className='filtersGridColumn'> </Grid.Column>
          </Grid.Row>
         <Grid.Row color={'Black'} className='filtersGridRow' >    
           <Grid.Column width={2} stretched={false} className='filtersGridColumn column-one'> </Grid.Column>
            {this.props.filters.slice(15, 20).map((filter) =><Grid.Column width={2} stretched={false} className='filtersGridColumn'>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name}/> </Grid.Column> )}
           <Grid.Column width={2} stretched={false} className='filtersGridColumn'> </Grid.Column>
           <Grid.Column width={2} stretched={false} className='filtersGridColumn'> </Grid.Column>
          </Grid.Row>
         <Grid.Row color={'Black'} className='filtersGridRow' >    
           <Grid.Column width={2} stretched={false} className='filtersGridColumn column-one'> </Grid.Column>
            {this.props.filters.slice(20, 22).map((filter) =><Grid.Column width={2} stretched={false} className='filtersGridColumn'>  <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name}/> </Grid.Column> )}
           <Grid.Column width={2} stretched={false} className='filtersGridColumn'> </Grid.Column>
           <Grid.Column width={2} stretched={false} className='filtersGridColumn'> </Grid.Column>
           <Grid.Column width={2} stretched={false} className='filtersGridColumn'> </Grid.Column>
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

const mapDispatchToProps = (dispatch) => {
    return {
        toggleVisibility: (visible) => dispatch(showFilters(visible))
    };
};


export default connect(mapStateToProps)(SidebarFilters)
