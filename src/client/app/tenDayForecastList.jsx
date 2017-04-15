import React from 'react';
import TenDayForecastListItem from './tenDayForecastListItem.jsx'

const TenDayForecastList = (props) => {
  console.log(props.tenDayForecast, 'tenDayForecast')
  return (
    <table>
    <thead align='center'>
      <tr>
      <th className='weatherHeader' colSpan='4'>Ten Day Forecast</th>
      </tr>
      </thead>
      <tbody>
    {props.tenDayForecast.map((dayForecast, index) => {
        return <TenDayForecastListItem key={index} dayForecast={dayForecast}/>}
      )}
    </tbody>
    </table>
    )
};

export default TenDayForecastList;