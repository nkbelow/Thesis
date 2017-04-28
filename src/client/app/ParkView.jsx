import React from 'react';
import axios from 'axios';
import {individualPark} from '../reducers/getParkReducer.js'
import {getPark} from '../actions/getPark.js';
import {connect} from 'react-redux'
import {getCampgrounds} from '../actions/getCampgrounds.js'
import ParkMapView from './singlePageMapView.jsx';
import WeatherForecast from './tenDayForecastList.jsx'
import ActivitiesList from './activitiesList.jsx';
import SinglePageNavBar from './singlePageNavBar.jsx';
import {getTenDayForecast} from '../actions/getTenDayForecast.js';
import {getLodging} from '../actions/getLodging.js';
import {getDistance} from '../actions/getDistance.js';
import {getTrails} from '../actions/getTrails.js';
import {toggleCampgrounds, toggleLodging} from '../actions/actions.js';
import {Link} from 'react-router-dom'
import {Message, Container, Divider, Grid, Header, Button} from 'semantic-ui-react'
import HistoricalWeatherDropdown from './historicalWeatherDataDropDown.jsx'
import NavBar from './NavBar.jsx';
import NavBarSinglePage from './NavBarSinglePage.jsx';
import UnconnectedTrailList from './UnconnectedTrailList.jsx';
import ConnectedTrailList from './ConnectedTrailList.jsx';
import LodgingsList from './lodgingsList.jsx'



class ParkView extends React.Component {
  componentWillMount() {
    console.log(this.props.match.params.code)
    this.props.getPark(this.props.match.params.code)
    .then((result) => {
      this.props.getCampgrounds(result[1][0].id)
      return result
    }).then((result) => {
      this.props.getLodging(result[1][0].latitude, result[1][0].longitude)
      return result
    }).then((result) => {
      this.props.getTenDayForecast(result[1][0].id)
      return result
    }).then((result) => {
      this.props.getTrails(result[1][0].id)
      return result;
    }).then((result) => {
      this.props.getDistance();
    })
  }


  render() {
    return(
      <div>
        {this.props.park && <div> <NavBarSinglePage parks={this.props.parks} />
        <ParkMapView parkCode = {this.props.match.params.code} id = {this.props.park[1][0].id} lat={this.props.park[1][0].latitude} lon={this.props.park[1][0].longitude} campgrounds={this.props.campgrounds} lodgings={this.props.lodgings}/>
        <div id="outer">
          <Button color='green' icon='tree' content='Campgrounds' onClick={this.props.toggleCampgrounds}/>
          <Button color='green'  icon='hotel' content='Lodging' onClick={this.props.toggleLodging}/>
        </div>
        <h1 className='parkname'>{this.props.park[1][0].name}</h1>
        <Container className='singlePageContainer' fluid>
        <Grid columns={2} relaxed>
        <Grid.Column>
        <Header size='large' textAlign='center'> Park Description </Header>
        <Message>
        <h3>{this.props.park[1][0].description}</h3>
        </Message>
        </Grid.Column>
        <Grid.Column>
        <Header size='large' textAlign='center'> Activities </Header>
        <ActivitiesList activities={this.props.park[0]}/>
        </Grid.Column>
        </Grid>
        </Container>
        <Container className='singlePageContainer' fluid>
        <Header size='large' textAlign='center'> Ten Day Forecast </Header>
        { this.props.tenDayForecast && <WeatherForecast tenDayForecast={this.props.tenDayForecast} />}
        </Container>
        <Container className='singlePageContainer' fluid>
        {this.props.trails !== undefined && this.props.trails.length !== 0  && this.props.distance === '' && 
        <div> <Header size='large' textAlign='center'> Trails </Header> <UnconnectedTrailList trails={this.props.trails} /> </div>}
        {this.props.trails !== undefined && this.props.trails.length !== 0  && this.props.distance !== '' && 
        <div> <Header size='large' textAlign='center'> Trails </Header><ConnectedTrailList distance={this.props.distance} trails={this.props.trails} /> </div>}
        </Container>
        <Container className='singlePageContainer' fluid>
        <Header size='large' textAlign='center'> Lodging </Header>
        {this.props.lodgings && <LodgingsList lodgings={this.props.lodgings} /> }
        </Container>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      park: state.individualPark.individualPark,
      campgrounds: state.getCampgrounds.campgrounds,
      tenDayForecast: state.getTenDayForecast.tenDayForecast,
      lodgings: state.getLodging.lodging,
      trails: state.getTrails.trails,
      distance: state.getDistance.distance
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    getPark: (code) => dispatch(getPark(code)),
    getCampgrounds: (id) => dispatch(getCampgrounds(id)),
    getTenDayForecast: (id) => dispatch(getTenDayForecast(id)),
    getLodging: (latitude, longitude) => dispatch(getLodging(latitude, longitude)),
    getTrails: (id) => dispatch(getTrails(id)),
    getDistance: () => dispatch(getDistance()),
    toggleCampgrounds: () => dispatch(toggleCampgrounds()),
    toggleLodging: () => dispatch(toggleLodging())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkView);

