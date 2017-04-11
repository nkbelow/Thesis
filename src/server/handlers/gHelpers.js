const axios = require('axios');


// location is a query string
const geocode = (location) => {
  // uncomment the next line to receive an example request
  // let location = 'Beaverdam Creek Swamp'
  const config = {
    method: 'get',
    url: 'http://maps.googleapis.com/maps/api/geocode/json',
    headers: {
      key: process.env.G_MAPS_GEOCODING_API_KEY
    },
    params: {
      address: location
    }
  };
  return axios(config).then((response) => {
    // what is returned is a lat/lng object
    return response.data.results[0].geometry.location;
  }
  ).catch((error) => {
    throw error;
  });
};

// example input
// places({latitude: 44.5853962, longitude: -111.0759105}, 5000, 'lodging')
  // radius and type are optional
const places = (location, radius, type) => {
  const config = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    params: {
      key: process.env.G_PLACES_API_KEY,
      location: '' + location.lat + ',' + location.lng,
      radius: radius || '50000',
      type: type || 'lodging'
    }
  };
  return axios(config).then((response) => {
    return response.data.results;
  });
};

module.exports = {
  geocode: geocode,
  places: places
};
