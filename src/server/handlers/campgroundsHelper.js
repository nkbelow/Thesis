const csvParse = require('csv-parse');
const parser = csvParse({delimiter: ':'})
const fs = require('fs');	
const csv = require('fast-csv')
const path = require('path');

let moveFrom = path.join(__dirname, '/parks');
// let moveTo = path.join(__dirname, '/parks/zion.geojson');

fs.readdir( moveFrom, function(err, files) {
	console.log(moveFrom)
	if(err) {
		console.error( "Could not list the directory.", err );
	}

	files.forEach(function(file, ind) {
		module.exports.ind = require("./parks/" + file);
		console.log(module.exports.ind);
	})
})

const csvToArray = (callback) => {
	let stream = fs.createReadStream(path.join(__dirname, '/campground.csv'))
	let campgrounds = [];
	let csvStream = csv()
    .on("data", function(data){
    	let entry = {};
		entry.lon = data[0];
		entry.lat = data[1];
		entry.name = data[4];
		entry.type = data[5];
		entry.open = data[7];
		entry.number = data[9];
		entry.elevation = data[10];
		entry.amenities = data[11];
         campgrounds.push(entry);
    })
    .on("end", function(){
    	callback(campgrounds);
         console.log("done");

    });
 
	stream.pipe(csvStream);

}

module.exports.csvToArray = csvToArray;