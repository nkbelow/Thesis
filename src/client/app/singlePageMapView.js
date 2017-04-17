import React, { Component } from "react";
import axios from 'axios';
import data from '../../../data/parksAndBoundaries.js'

import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

const styles = {
  clusterMarker: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: '#51D5A0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: '2px solid #56C498'
  },
  marker: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: '#51D5A0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #C9C9C9'
  }
}

const clusterMarker = (coordinates) => (
  <Marker coordinates={coordinates} style={styles.clusterMarker}>
    C
  </Marker>
);

// PREVIOUS CODE
class Map extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lodgings: null
    };
  }

  componentDidMount(){
    console.log(this.state.lodgings);
  }

  render(){
    return (
      <div>
      <ReactMapboxGl
    style="mapbox://styles/mapbox/outdoors-v9"
    accessToken="pk.eyJ1IjoibmtiZWxvdyIsImEiOiJjajFoZzlkem4wMDhiMzNwbWN4NXRoanh4In0.Yy_FmJCSFQjYifouyPCTOQ"
    containerStyle={{
      height: "50vh",
      width: "100vw"
    }}
    center={[this.props.lon, this.props.lat]}
    zoom={[8.5]} >
    {/*<Marker
    coordinates={[-0.2416815, 51.5285582]}
    anchor="bottom">
    <img src="https://pixabay.com/p-1210559/?no_redirect"/>
  </Marker>*/}
    </ReactMapboxGl>
    </div>
    )   
  }
}

export default Map;

// OLD CODE
// import React from 'react';
// import axios from 'axios';
// import data from '../../../data/parksAndBoundaries.js'

// import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";


// const Map = (props) => {
//   return (
//     <div>
//     <ReactMapboxGl
//   style="mapbox://styles/mapbox/outdoors-v9"
//   accessToken="pk.eyJ1IjoibmtiZWxvdyIsImEiOiJjajFoZzlkem4wMDhiMzNwbWN4NXRoanh4In0.Yy_FmJCSFQjYifouyPCTOQ"
//   containerStyle={{
//     height: "50vh",
//     width: "100vw"
//   }}
//   center={[props.lon, props.lat]}
//   zoom={[8.5]} >
//   {/*<Marker
//   coordinates={[-0.2416815, 51.5285582]}
//   anchor="bottom">
//   <img src="https://pixabay.com/p-1210559/?no_redirect"/>
// </Marker>*/}
//   </ReactMapboxGl>
//   </div>
//   )
// }

// export default Map;