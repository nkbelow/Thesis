const axios = require('axios');


const geocode = (location, callback) => {

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
    if (response.data.results[0]) {
      callback(response.data.results[0].geometry.location);}
    
  }
  ).catch((error) => {
    throw error;
  });
};

// example input
// places({latitude: 44.5853962, longitude: -111.0759105}, 5000, 'lodging')
  // radius and type are optional
const places = (location, radius, type) => {
  let config1 = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    params: {
      key: process.env.G_MAPS_PLACES_KEY,
      location: '' + location.lat + ',' + location.lng,
      radius: radius || '50000',
      type: type || 'lodging'
    }
  };
  return axios(config1).then((response) => {

    let lodgingData = response.data.results;
    const lodgingPromises = lodgingData.map((lodge, i) => {
    let config2 = {
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/place/details/json',
      params: {
        key: process.env.G_MAPS_PLACES_KEY,
        placeid: lodgingData[i].place_id,
      }
    }
      return axios(config2)
    });
    return Promise.all([lodgingData, Promise.all(lodgingPromises)]);
    })
    .then(([lodgingData, lodges] ) => {
      const websites = lodges.map(lodge => {
        return lodge['data']['result'].website
      });
      websites.forEach((website, index) => {
        lodgingData[index].website = website;
      })
      return lodgingData;
    })
    .then(result => {
      return result;
    })   
    .catch(err => {
        console.log(err);
        throw err
    })

};

module.exports = {
  geocode: geocode,
  places: places
};
