import React from 'react';
import Axios from 'axios';
import ParkMapView from './singlePageMapView.jsx';
import WeatherForecast from './tenDayForecastList.jsx'
import ActivitiesList from './activitiesList.jsx';
import SinglePageNavBar from './singlePageNavBar.jsx';
import {getTenDayForecast} from '../actions/getTenDayForecast.js';
import {getLodging} from '../actions/getLodging.js';
import {Link} from 'react-router-dom'
import {Message} from 'semantic-ui-react'
import {connect} from 'react-redux';
// import Climate from 
class ParkDetail extends React.Component {
  componentDidMount() {
    this.props.getTenDayForecast(this.props.park.latitude, this.props.park.longitude)
    this.props.getLodging(this.props.park.latitude, this.props.park.longitude)
  }
  

  // getMonthlyClimate(latitude, longitude) {
  //   let config = {
  //     url: '/api/park/climate',
  //     method: 'post',
  //     data: {
  //       latitude: latitude,
  //       longitude: longitude,
  //       date: climate
  //     }
  //   }
  //   return Axios(config)
  //   .then(data => {
  //     this.setState({climate: data['data']})
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
  /*lodgings={this.state.lodgings}*/
  render() {
    console.log('these are my campgrounds', this.props);
    return(
      <div>
      <SinglePageNavBar />
        <ParkMapView id = {this.props.park.id} lat={this.props.park.latitude} lon={this.props.park.longitude} campgrounds={this.props.campgrounds} lodgings={this.props.lodgings}/>
        <h1 className='parkname'>{this.props.park.name}</h1>
        <Message>
           <Message.Header>
           Park Description
           </Message.Header>
        <h3>{this.props.park.description}</h3>
        </Message>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
          <ActivitiesList activities={this.props.activities}/>
            </div>
            <div className='col-md-6'>
        { this.props.tenDayForecast && <WeatherForecast tenDayForecast={this.props.tenDayForecast} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      tenDayForecast: state.getTenDayForecast.tenDayForecast,
      park: state.individualPark.individualPark[1][0],
      lodgings: state.getLodging.lodging
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    getTenDayForecast: (latitude, longitude) => dispatch(getTenDayForecast(latitude, longitude)),
    getLodging: (latitude, longitude) => dispatch(getLodging(latitude, longitude))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkDetail);