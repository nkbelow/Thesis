const XLSX = require('xlsx')

// converts an xlsx file and saves it in an array
let nationalMonuments = []

// uncomment lines 9, 19, 27 to check total number of national monuments
// const numberOfMonuments = [];
let workbook = XLSX.readFile(__dirname + '/National_Natural_Landmark.xlsx');

const queryNationalLandmark = () => {
  let listOfStates = workbook.Props.SheetNames.splice(1)
  let counter = 0;

  // goes through each state sheet and pushes the monument to the list
  listOfStates.forEach(state => {
    let i = 2;
    while (workbook.Sheets[state]['B' + i]) {
      let monument = workbook.Sheets[state]['B' + i].v
      nationalMonuments.push(monument)
      i++;
    }
  })

  // uncomment to check total number of national monuments
  // numberOfMonuments.forEach(a => counter++);
}

module.exports = {
  queryNationalLandmark: queryNationalLandmark
}