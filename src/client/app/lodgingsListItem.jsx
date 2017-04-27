import React from 'react';
import {Grid} from 'semantic-ui-react'

const LodgingsListItem = (props) => {
  console.log(props.id, 'key')

  const imgStyle = {
      width:'100px',
      height:'50px',
      zIndex:'-100',
      position: 'relative',
      'boxShadow': '2px 2px 2px 1px rgba(0, 0, 0, 0.8)'
    }
  return (
    <Grid.Column>
    <img style={imgStyle} src={`https://res.cloudinary.com/djzaih6fz/image/upload/lodging${props.id}.jpeg`} />
    </Grid.Column>
    )
}

export default LodgingsListItem;