import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl, Marker, Cluster } from "react-mapbox-gl";
import { Link } from 'react-router-dom'

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

export default class MapBox extends Component {
	constructor (props) {
		super(props);
		this.state = {
    		center: [-98.5, 39],
    		zoom: [1],
    		skip: 0,
   		 	popupShowLabel: true,
   		 	parks: null,
   		 	popup: null
  		};
	}

	

  addPopup (park) {
    this.setState({popup: park});
  }

  removePopup () {
    this.setState({popup: null});
  }

 


	render () {
		return (
		<div>
		<ReactMapboxGl
		  style="mapbox://styles/mapbox/streets-v8"
          center={this.state.center}
          zoom={this.state.zoom}
          accessToken={'pk.eyJ1IjoidHdhbGs0ODIxIiwiYSI6ImNqMWk3ajQ3YjAxazMyd28wbmxpeG5pOW0ifQ.pD4Uic9vRI0_fh0_XV0tCg'}
          containerStyle={{
		        height: "80vh",
		        width: "80vw"
		      }}
          onClick={this.removePopup.bind(this)}>
		 
		 {  this.props.parks &&
		 	this.props.parks.map((park) => (
              <Marker
                key={park.id}
                style={styles.marker}
                coordinates={[park.longitude, park.latitude]}
                onClick={this.addPopup.bind(this, park)}>

                <img style= {{
                  maxHeight:'20px',
                  maxWidth:'20px',
                  height: 'auto',
                  width: 'auto'
                }} src="https://cdn1.iconfinder.com/data/icons/map-objects/154/map-object-fir-forest-park-512.png" />

              </Marker>
            ))           
          }           

      { this.state.popup && 
      
              <Popup
                coordinates={[this.state.popup.longitude, this.state.popup.latitude]}
                offset={ [0, -35] }
                >
                <div>
                  <h2>{this.state.popup.name}</h2>
                  <Link to={`park/${this.state.popup.parkcode}/`}>
                    <p>Go to page</p>
                  </Link>
                  <p style={{color:"blue"}} onClick={this.removePopup.bind(this)}> Hide </p>
                </div>
              </Popup>
      
      }

    </ReactMapboxGl>
       

       </div>
    )
	}
}