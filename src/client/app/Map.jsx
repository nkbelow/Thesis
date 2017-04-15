import React from 'react';
import ReactDOM from 'react-dom';
import GoogleApi from './GoogleApi';
import $ from 'jquery'


class Map extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loaded: false,
			google: null,
			lat: 44.427963, 
			lng: -110.588514,
			zoom: 8,
			markers: []
		}
		// this.getMap.bind(this);
		this.loadMap.bind(this);

	}

	componentDidMount () {
		// this.getMap();
		console.log("getting map")
		$.ajax({
			method: "GET",
			url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYLO9x06BKBRPGVMPmHHrPHP-t-51nX4&callback=CALLBACK_NAME',
			dataType: 'jsonp',
			success: function () {
				this.setState({
					google: window.google
				})
			}.bind(this)
		})
	}

	// componentDidUpdate () {
	// 	console.log('component updated, state:', this)
		
		
	// }

	componentDidUpdate () {
		console.log('updated', this.state)
		if (!this.state.loaded && this.props.activePark) {
			this.loadMap();
		}
	}

	// getMap () {
		
	// 	// url = GoogleApi({
	// 	// 		apiKey: apiKey,
 //  //         		libraries: libraries
	// 	// 	});

	// 	url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYLO9x06BKBRPGVMPmHHrPHP-t-51nX4&callback=CALLBACK_NAME'
	// 	$.ajax({
	// 		method: "GET",
	// 		url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYLO9x06BKBRPGVMPmHHrPHP-t-51nX4&callback=CALLBACK_NAME',
	// 		success: function () {
	// 			this.setState({
	// 				google: window.google
	// 			})
	// 		}.bind(this)
	// 	})
		
	// }

	loadMap () {
		const maps = this.state.google.maps;
		console.log('loading map, maps: ', maps)
		const mapRef = this.refs.map;

		const node = ReactDOM.findDOMNode(mapRef);
		console.log('map node: ', node)	
		let center = new maps.LatLng(this.state.lat, this.state.lng)
		let mapConfig = Object.assign({}, {
          center, zoom: this.state.zoom
        })

        //originally this.map
        let map = new maps.Map(node, mapConfig);
        var marker = new google.maps.Marker({
    		position: center,
    		map: map,
    		title: 'Yellowstone'
  		});
        var contentString = `${this.props.activePark}`;
  		var infowindow = new google.maps.InfoWindow({
		    content: contentString
		  });

  		marker.addListener('click', function() {
		    infowindow.open(map, marker);
		  });


        console.log(map)

        


        this.setState({
          loaded: true,
          markers: [marker],
          map: map,
          google: this.state.google
        })

	}


	render () {
		return (<div style={{width: "75%", height: "50%"}} ref='map'>Hello</div>)
	}

}

export default Map;