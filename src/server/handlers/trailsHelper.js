// const axios = require('axios');

// const trails = (location) => {
//   const config = {
//     method: 'get',
//     url: 'https://trailapi-trailapi.p.mashape.com/',
//     headers: {
//       'X-Mashape-Key': process.env.X_Mashape_Key,
//     },
//     params: {
//       lat: location.lat,
//       lon: location.lng,
//       limit: '100',
//       // 'q[activities_activity_type_name_eq]': 'hiking',
//       // 'q[country_cont]': 'United States',
//       radius: '35'
//     }
//   };
//   return axios(config).then((response) => {
//     return response.data.places;
//   }).catch((error) => {
//     throw error;
//   });
// };

// module.exports = {
//   trails: trails
// };

