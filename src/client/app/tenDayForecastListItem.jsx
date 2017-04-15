import React from 'react';

const TenDayForecastListItem = (props) => {
  return (
    <tr>
        <td><img src={props.dayForecast.icon_url} /></td>
        <td>{props.dayForecast.date.weekday}</td>
        <td>{props.dayForecast.conditions}</td>
        <td>{`${props.dayForecast.high.fahrenheit}°F/${props.dayForecast.low.fahrenheit}°F`}</td>
        </tr>
        )
};

export default TenDayForecastListItem;