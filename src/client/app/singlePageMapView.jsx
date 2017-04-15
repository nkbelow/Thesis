import React from 'react';
import axios from 'axios';

import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
const Map = (props) => {
  return (
    <div>
    <ReactMapboxGl
  style="mapbox://styles/mapbox/outdoors-v9"
  accessToken="pk.eyJ1IjoibmtiZWxvdyIsImEiOiJjajFoZzlkem4wMDhiMzNwbWN4NXRoanh4In0.Yy_FmJCSFQjYifouyPCTOQ"
  containerStyle={{
    height: "50vh",
    width: "100vw"
  }}
  center={[props.lon, props.lat]}
  zoom={[8.5]} >
  <Marker
  coordinates={[-0.2416815, 51.5285582]}
  anchor="bottom">
  <img src="https://pixabay.com/p-1210559/?no_redirect"/>
</Marker>
  </ReactMapboxGl>
  </div>
  )
}

export default Map;