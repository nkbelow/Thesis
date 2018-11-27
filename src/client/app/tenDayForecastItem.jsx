import React from 'react';
import {Grid} from 'semantic-ui-react';

const TenDayForecastItem = ({dayForecast}) => {
  return (
     <Grid.Column>
          <img src={dayForecast.icon}/>
          <p>{dayForecast.date}</p>
          <p>{`${dayForecast.high}°F/${dayForecast.low}°F`}</p>

          
     </Grid.Column>
    )

}

export default TenDayForecastItem;