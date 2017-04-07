const XLSX = require('xlsx');

const path = require('path');

// converts an xlsx file and saves it in an array.
const nationalMonuments = [];

// uncomment to check total gnumber of national monuments.
const workbook = XLSX.readFile(path.join(__dirname, '/National_Natural_Landmark.xlsx'));

const queryNationalLandmark = () => {
  const listOfStates = workbook.Props.SheetNames.splice(1);
  // count for the number of monuments as a check
  // let counter = 0;

  // goes through each state sheet and creates a monument list for that state
  listOfStates.forEach((state) => {
    let i = 2;
    while (workbook.Sheets[state]['B' + i]) {
      const monument = workbook.Sheets[state]['B' + i].v;
      nationalMonuments.push(monument);
      i += 1;
      // counter += 1;
    }
  });

  return nationalMonuments;
};

module.exports.landmarkQuery = queryNationalLandmark;
