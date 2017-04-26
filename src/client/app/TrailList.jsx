import React from 'react';
import ParkItem from './ParkItem.jsx';
import Masonry from 'react-masonry-component';

function TrailList(props) {
  const trails = props.trails;
  const trailItems = trails.map((trail) =>
  	<li> {trail.name} </li>
  );
  return (
    <ul>
      {trailItems}
    </ul>
  );
}

export default TrailList;
