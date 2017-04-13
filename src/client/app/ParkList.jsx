import React from 'react';
import ParkItem from './ParkItem.jsx';

function ParkList(props) {
  const parks = props.parks;
  const parkItems = parks.map((park) =>
    <ParkItem key={park.name.toString()}
              park={park} />
  );
  
  return (
    <ul>
      {parkItems}
    </ul>
  );
}

export default ParkList;
