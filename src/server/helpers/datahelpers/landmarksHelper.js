const XLSX = require('xlsx')
const gHelpers = require('./gHelpers')

// converts an xlsx file and saves it in an array
const nationalMonuments = [];

// uncomment to check total number of national monuments
// const numberOfMonuments = [];

const queryNationalLandmark = () => {
  let workbook = XLSX.readFile(__dirname + '/National_Natural_Landmark.xlsx');
  let listOfStates = workbook.Props.SheetNames.splice(1)
  let counter = 0;

  // goes through each state sheet and creates a monument list for that state
  // example: {alabama: [array of monuments]}
  listOfStates.forEach(state => {
    let i = 2;
    while (workbook.Sheets[state]['B' + i]) {
      // numberOfMonuments.push(workbook.Sheets[state]['B' + i].v)
      let monument = workbook.Sheets[state]['B' + i].v
      nationalMonuments.push(monument)
      i++;
    }
  })

  return nationalMonuments;

  // uncomment to check total number of national monuments
  // numberOfMonuments.forEach(a => counter++);
};

const geocodeLandmarks = (landmarks, callback) => {
  geocodedLandmarks = {};
  timer = 0;
  for (landmark of landmarks) {
    setTimeout(function(landmark, landmarks, geocodedLandmarks, cb) {
      gHelpers.geocode(landmark, function(coords) {
      geocodedLandmarks[landmark] = coords;
      console.log(landmarks.length, Object.keys(geocodedLandmarks).length, coords)
      if (Object.keys(geocodedLandmarks).length === 250) {
        cb(geocodedLandmarks);
      }
    });
    }.bind(null, landmark, landmarks, geocodedLandmarks, callback), timer)
    timer = timer + 500
    
  }
}


module.exports = {
  landmarkQuery: queryNationalLandmark,
  geocodeLandmarks: geocodeLandmarks
  
}
