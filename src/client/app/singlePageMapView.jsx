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

class Map extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lodgings: null
    };
  }

  componentDidMount(){
    axios.get('/api/park/lodgings', {
        params: {
          lon: this.props.lon, 
          lat: this.props.lat
        }
      })
      .then(res => {
        this.setState({lodgings: res.data});
      })
      .catch(err => console.log(err))
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
        { 
          this.state.lodgings &&
            this.state.lodgings.map((lodging) =>(
              <Marker
                key={lodging.id}
                style={styles.marker}
                coordinates={[lodging.geometry.location.lng, lodging.geometry.location.lat]}>
                <img style= {{
                      maxHeight:'20px',
                      maxWidth:'20px',
                      height: 'auto',
                      width: 'auto'
                    }} src="https://cdn3.iconfinder.com/data/icons/map/500/hotel-512.png" />
              </Marker>
          ))
        }
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

// import React from 'react';
// import axios from 'axios';

// import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

// const styles = {
//   marker: {
//     width: 15,
//     height: 15,
//     borderRadius: '50%',
//     backgroundColor: '#51D5A0',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     border: '2px solid #C9C9C9'
//   }
// }


// const Map = (props) => {
//   return (
//     <div>
//     <ReactMapboxGl
//       style="mapbox://styles/mapbox/outdoors-v9"
//       accessToken="pk.eyJ1IjoibmtiZWxvdyIsImEiOiJjajFoZzlkem4wMDhiMzNwbWN4NXRoanh4In0.Yy_FmJCSFQjYifouyPCTOQ"
//       containerStyle={{
//         height: "50vh",
//         width: "100vw"
//       }}
//       center={[props.lon, props.lat]}
//       zoom={[8.5]}>
    
//     { 
//       props.campgrounds &&
//         props.campgrounds.map((campground) =>(
//           <Marker
//             key={campground.id}
//             style={styles.marker}
//             coordinates={[campground.longitude, campground.latitude]}>

//             <img style= {{
//                   maxHeight:'20px',
//                   maxWidth:'20px',
//                   height: 'auto',
//                   width: 'auto'
//                 }} src="http://www.symbols.com/gi.php?type=1&id=770&i=1" />
//           </Marker>
//       ))
//     }
//   </ReactMapboxGl>
//   </div>
//   )
// }

// export default Map;