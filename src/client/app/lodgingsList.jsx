import React from 'react';
import {Grid} from 'semantic-ui-react';
import LodgingsListItem from 

const LodgingsList = (props) => {
  return (
    <Grid>
      {props.lodgings.map((lodge, index) => {
        return (
          <LodgingsListItem lodge={lodge} key={index} /> )
      })}
    </Grid>
    )
}

export default LodgingsList;