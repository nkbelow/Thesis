import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux'



import ReactMapboxGl, { Layer, Feature, Marker, GeoJSONLayer } from "react-mapbox-gl";

const styles = {
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

const Map = (props) => {
  // let boundary = {"type":"Feature", "geometry": {"type": "Polygon", "coordinates": parks.parks[props.id-1].boundaries}};
  let url = 'https://raw.githubusercontent.com/nationalparkservice/data/gh-pages/base_data/boundaries/parks/' + props.parkCode + '.geojson';

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
      zoom={[8.5]}>
    
    { props.campgroundsVisible &&
        props.campgrounds &&
          props.campgrounds.map((campground) =>(
            <Marker
              key={campground.id}
              style={styles.marker}
              coordinates={[campground.longitude, campground.latitude]}>
              <img style= {{
                    maxHeight:'20px',
                    maxWidth:'20px',
                    height: 'auto',
                    width: 'auto'
                  }} src="http://www.symbols.com/gi.php?type=1&id=770&i=1" />
            </Marker>
        ))
      }

      { props.lodgingsVisible &&
      props.lodgings &&
        props.lodgings.map((lodging) =>(
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


        <GeoJSONLayer
          data={url}
          lineLayout={{visibility:"visible"}}/>

  </ReactMapboxGl>
  </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state, {
    campgroundsVisible: state.toggleVisibility.campgrounds,
    lodgingsVisible: state.toggleVisibility.lodging
  })
}

export default connect(mapStateToProps)(Map);