import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl, Marker, Cluster } from "react-mapbox-gl";

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
   		 	popups: {}
  		};
	}

	toggleInfoWindow(id) {
		let currentPopups = this.state.popups;
		currentPopups[id] = !currentPopups[id];
		this.setState({
			popups: currentPopups
		});
		console.log(this.state)
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
		  }}>
		 
		 {  this.props.parks &&
		 	this.props.parks.map((park) => {
		 		park.visible = false;
		 		var toggleVisible = () => {
		 			console.log(park.visible)
		 			park.visible = !park.visible;
		 		}
		 		return (
		 		<div>
              <Marker
                key={park.id}
                style={styles.marker}
                coordinates={[park.longitude, park.latitude]}
                onClick={toggleVisible}>

              </Marker>
              <Popup
              	coordinates={[park.longitude, park.latitude]}
              	offset={{
    			'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
  				}}
  				style={{
  					display: park.visible ? "block" : "none"
  				}}
  				onClick={toggleVisible}
  				
           	  ></Popup>
           	  </div>
           	)
           	}
            )
            
          } </ReactMapboxGl>
       

       </div>
          )
	}
}
 // <Cluster ClusterMarkerFactory={this.clusterMarker} clusterThreshold={100}>
     //   <Layer
     //  type="symbol"
     //  id="marker">
     //  <Feature coordinates={this.state.center}/>
    	// </Layer>