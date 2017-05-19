import React from 'react';
import {Grid} from 'semantic-ui-react';
import TenDayForecastItem from './tenDayForecastItem.jsx';

const TenDayForecastList = (props) => {
  return (
    <Grid columns={10} relaxed>
    {props.tenDayForecast.map((dayForecast, index) => 
        <TenDayForecastItem key={index} dayForecast={dayForecast} />
      )}
    </Grid>
    )
};

export default TenDayForecastList;