const XLSX = require('xlsx')

// converts an xlsx file and saves it in an array.
let nationalMonuments = []

// uncomment to check total gnumber of national monuments.
let workbook = XLSX.readFile(__dirname + '/National_Natural_Landmark.xlsx');

const queryNationalLandmark = () => {
  let listOfStates = workbook.Props.SheetNames.splice(1)
  // count for the number of monuments as a check
  // let counter = 0;

  // goes through each state sheet and creates a monument list for that state.
  listOfStates.forEach(state => {
    let i = 2;
    while (workbook.Sheets[state]['B' + i]) {
      let monument = workbook.Sheets[state]['B' + i].v
      nationalMonuments.push(monument)
      i++;
      // counter++;
    }
  })
}

module.exports = {
  queryNationalLandmark: queryNationalLandmark
}