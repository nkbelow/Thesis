import React from 'react';
import Axios from 'axios';
import ParkMapView from './singlePageMapView.jsx';
import WeatherForecast from './tenDayForecastList.jsx'
import ActivitiesList from './activitiesList.jsx';
import {Link} from 'react-router-dom'
// import Climate from 
class ParkDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenDayForecast: null,
      climate: null
    }
    this.getTenDayForecast = this.getTenDayForecast.bind(this);
    // this.getMonthlyClimate = this.getMonthlyClimate.bind(this);
    let climate = null;
  }
  componentDidMount() {
    this.getTenDayForecast(this.props.park.latitude, this.props.park.longitude);
  }
  getTenDayForecast(latitude, longitude) {
    let config = {
      url: '/api/park/tenDayForecast',
      method: 'post',
      data: {
        latitude: latitude,
        longitude: longitude
      }
    }
    return Axios(config)
    .then(data => {
      console.log(data['data'], 'this is the data')
      this.setState({tenDayForecast: data['data']['simpleforecast']['forecastday']})
    })
    .catch(err => {
      console.log(err);
    })
  }
  getMonthlyClimate(latitude, longitude) {
    const climate = this.refs.climate.value;
    console.log(climate)
    let config = {
      url: '/api/park/climate',
      method: 'post',
      data: {
        latitude: latitude,
        longitude: longitude,
        date: climate
      }
    }
    return Axios(config)
    .then(data => {
      console.log(data, 'this is the data')
      this.setState({climate: data['data']})
    })
    .catch(err => {
      console.log(err);
    })

//     // Let's use moment static reference in the Datetime component.
// var yesterday = Datetime.moment().subtract(1, 'day');
// var thirtyDaysAhead = Datetime.moment().add(30, 'day');
// var valid = function( current ){
//     return current.isAfter( yesterday ) && current.isBefore(thirtyDaysAhead) ;
// };

// React.render(
//   <div>
//     <Datetime input={ false } isValidDate={ valid } />
//   </div>,
//   document.body
// );
  }
  render() {
    return(
      <div>
      <ParkMapView lat={this.props.park.latitude} lon={this.props.park.longitude} />
        <Link to='/'>HOME</Link> <h1 className='parkname'>{this.props.park.name}</h1>
        <h3>{this.props.park.description}</h3>
        <ActivitiesList activities={this.props.activities}/> 
      <input type='month' ref='climate'/> 
      <input type='submit' onClick={() => this.getMonthlyClimate(this.props.park.latitude, this.props.park.longitude)}/>
        { this.state.tenDayForecast && <WeatherForecast tenDayForecast={this.state.tenDayForecast} />}
        {/*{this.state.climate && <Climate climate={this.state.climate} />}*/}
      </div>
    );
  }
}

export default ParkDetail;