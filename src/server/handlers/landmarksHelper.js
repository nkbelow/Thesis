const XLSX = require('xlsx');

// converts an xlsx file and saves it in an array
const nationalMonuments = [];

// uncomment to check total number of national monuments
// const numberOfMonuments = [];
const workbook = XLSX.readFile(path.join(__dirname, '/National_Natural_Landmark.xlsx'));

const queryNationalLandmark = () => {
  const listOfStates = workbook.Props.SheetNames.splice(1);
  // const counter = 0;

  // goes through each state sheet and creates a monument list for that state
  // example: {alabama: [array of monuments]}
  listOfStates.forEach((state) => {
    const monumentsListForState = [state];
    let i = 2;
    while (workbook.Sheets[state]['B' + i]) {
      // numberOfMonuments.push(workbook.Sheets[state]['B' + i].v);
      const monument = workbook.Sheets[state]['B' + i].v;
      monumentsListForState.push(monument);
      i += 1;
    }
    nationalMonuments.push(monumentsListForState);
  });

  // uncomment to check total number of national monuments
  // numberOfMonuments.forEach(a => counter++);
};

module.exports = {
  queryNationalLandmark: queryNationalLandmark
};