const db = require('../index.js').db;

const searchTable = (qualifiersArray, columnName, tableName) => {  
  completeQuery = ' WHERE '
  
  for (var i = 0; i < qualifiersArray.length; i++) {
    if(i < qualifiersArray.length - 1) {
      singleActQualifier = "(" + columnName + "='" + qualifiersArray[i].toUpperCase() + "') OR "
    } else {
      singleActQualifier = "(" + columnName + "='" + qualifiersArray[i].toUpperCase() + "')"
    }
    completeQuery = completeQuery.concat(singleActQualifier)
  }

  completeQuery = "SELECT * FROM " + tableName + completeQuery

  return db.query(completeQuery).then((response) => {
    return response;
  })
}

module.exports = {
  searchTable: searchTable
};