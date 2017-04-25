import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Dropdown} from 'semantic-ui-react';
import {getHistoricalData} from '../actions/getHistoricalData.js'

const HistoricalWeatherDataDropDown = (props) => {

  const handleClick = (event, {value}) => {
    console.log('this changed');
    props.getHistoricalData(props.park[1][0].latitude, props.park[1][0].longitude, value);
  }

  const monthOptions = [
  {key: 'Jan', value: '01010131', text: 'January'}, 
  {key: 'Feb', value: '02010228', text: 'February'}, 
  {key: 'Mar', value: '03010331', text: 'March'}, 
  {key: 'Apr', value: '04010430', text: 'April'}, 
  {key: 'May', value: '05010531', text: 'May'}, 
  {key: 'Jun', value: '06010630', text: 'June'}, 
  {key: 'Jul', value: '07010731', text: 'July'},
  {key: 'Aug', value: '08010831', text: 'August'},
  {key: 'Sep', value: '09010930', text: 'September'},
  {key: 'Oct', value: '10011031', text: 'October'},
  {key: 'Nov', value: '11011130', text: 'November'},
  {key: 'Dec', value: '12011231', text: 'December'}
  ]
  return (
    <Dropdown onChange={handleClick} placeholder='Choose Your Month of Travel' search selection options={monthOptions} />
    )
}

const mapStateToProps = (state) => {
  return {
    historicalWeatherData: state.getHistoricalData.historicalData,
    park: state.individualPark.individualPark
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHistoricalData: (latitude, longitude, month) => dispatch(getHistoricalData(latitude, longitude, month))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoricalWeatherDataDropDown);