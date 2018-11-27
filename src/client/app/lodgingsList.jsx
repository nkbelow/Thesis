import React from 'react';
import {Grid} from 'semantic-ui-react';
import LodgingsListItem from './lodgingsListItem.jsx'
import Masonry from 'react-masonry-component';

const LodgingsList = (props) => {
  return (
    <Masonry >
      {props.lodgings.map((lodge, index) => {
        return (
          <LodgingsListItem lodge={lodge} id={index + 1} /> )
      })}
      </Masonry>
    )
}

export default LodgingsList;