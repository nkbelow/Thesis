const csvParse = require('csv-parse');
const parser = csvParse({delimiter: ':'})
const fs = require('fs');	
const csv = require('fast-csv')
const path = require('path');
const boundariesData = require('../../../data/parksWithCampgrounds.js');
const util = require('../utilities')


const csvToArray = (callback) => {
	let stream = fs.createReadStream(path.join(__dirname, '/SouthCamp.csv'))
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

const checkBoundaries = (campgrounds, callback) => {
	let parks = boundariesData.parks
	for (campground of campgrounds) {
		let lon = campground.lon;
		let lat = campground.lat;
		for (park of parks) {
			if (park) {
				if (util.pointInPolygon(lon, lat, park.boundaries)) {
					console.log('campground in park, campground: ', campground, "park: ", park)
					if (!park.campgrounds) {
						park.campgrounds = [campground];
						
					} else {
						park.campgrounds.push(campground);
						// console.log(park)
					}
				}
			}
		}

	}
	callback(parks);
}

module.exports.csvToArray = csvToArray;
module.exports.checkBoundaries = checkBoundaries;