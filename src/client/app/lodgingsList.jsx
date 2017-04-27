import React from 'react';
import {Grid} from 'semantic-ui-react';
import LodgingsListItem from './lodgingsListItem.jsx'

const LodgingsList = (props) => {
  console.log(props.lodgings)
  return (
    <Grid celled>
      {props.lodgings.map((lodge, index) => {
        return (
          <LodgingsListItem lodge={lodge} id={index + 1} /> )
      })}
    </Grid>
    )
}

export default LodgingsList;