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
			lat: -34.397,
			lng: 150.644,
			zoom: 8
		}
	}

	componentWillMount () {
		this.getMap();
	}

	componentDidUpdate () {
		if (this.state.google) {
			this.loadMap();
		}
		
	}

	getMap () {


		this.setState({
			google: GoogleApi({
				apiKey: apiKey,
          		libraries: libraries
			})
		})
	}

	loadMap () {
		const maps = this.state.google.maps;
		const mapRef = refs.map;
		const node = ReactDOM.findDOMNode(mapRef);
		let center = new maps.LatLng(this.state.lat, this.state.lng)
		let mapConfig = Object.assign({}, defaultMapConfig, {
          center, zoom: this.state.zoom
        })

        //originally this.map
        let map = new maps.Map(node, mapConfig);

        


        this.setState({
          loaded: true,
          map: map,
          google: this.state.google
        })

	}


	render {
		return (<div ref='map'></div>)
	}

}

export default Map;