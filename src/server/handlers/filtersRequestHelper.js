const filters = require('../../db/models/filters.js');

const activities = (activities) => {
  return filters.searchTable(activities, 'activity', 'activities')
    // convert the result from the query into an array with just activity ids.
    .then(function(resultActivityIds) {
      var activitiesIds = [];
      for(var key in resultActivityIds) {
        activitiesIds.push(resultActivityIds[key].id.toString())
      }
      return activitiesIds;
    })
    // requery the inner join table for the park ids.
    .then((activitiesIds) => {
      return filters.searchTable(activitiesIds, 'activity_id', 'activities_parks')
    })
    // convert the result from the query into an array with just park ids.
    .then((resultParkIds) => {
      var parkIds = [];
      for (var i = 0; i < resultParkIds.length; i++) {
        parkIds.push(resultParkIds[i].park_id.toString());
      }
      return parkIds;
    })
    // requery the parks table using the parkIds array.
    .then((parkIds) => {
      return filters.searchTable(parkIds, 'id', 'parks');
    })
    // return result back to server.
    .then((result) => {
      return result;
  })
}

module.exports = {
  activities: activities
}