const db = require('../index.js').db

const getParkIdsByActivities = (queryObject) => {  

  return db.tx(t => {
    const queryArray = []
    const activities = []
      for (var key in queryObject) {
        var activity = key.toUpperCase();
        
        queryArray.push(t.many("SELECT park_id FROM activities_parks WHERE activity_id=(SELECT id FROM activities WHERE activity='" + activity + "')"))
        activities.push(activity)
      }

      // creating a sequence of transaction queries:
      // returning a promise that determines a successful transaction:
      return t.batch(queryArray).then(parkIds => {
        return [parkIds, activities]; // all of the queries are to be resolved;
      })
  })
  .then(([parkIds, activities]) => {

    let cleanParkIdsArray = parkIds.map((parkIdArray) => {
      return parkIdArray.map((parkIdObject) => {
        return parkIdObject.park_id
      })
    })

    let parkIdsByActivity = activities.reduce((accumulator, activity, index) => {
      accumulator[activity] = cleanParkIdsArray[index]
      return accumulator
    }, {})
    return parkIdsByActivity

  })
  .catch(error => {
      console.log(error); // printing the error;
  });
}

module.exports = getParkIdsByActivities;