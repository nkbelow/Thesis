import React from 'react';
import {Grid} from 'semantic-ui-react';

const TenDayForecastItem = ({dayForecast}) => {
  return (
     <Grid.Column>
          <img src={dayForecast.icon_url}/>
          <p>{dayForecast.date.weekday}</p>
          <p>{`${dayForecast.high.fahrenheit}°F/${dayForecast.low.fahrenheit}°F`}</p>

          
     </Grid.Column>
    )

}

export default TenDayForecastItem;