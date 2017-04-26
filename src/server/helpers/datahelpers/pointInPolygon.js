const pointInPolygon = (x, y, geoJSON) => {

	for (let k = 0; k<geoJSON.length; k++) {
		let j = geoJSON[k].length-1;
		let hasOddNodes = false;
		for (let i = 0; i<geoJSON[k].length; i++) {
			let xi = geoJSON[k][i][0];
			let yi = geoJSON[k][i][1];
			let xj = geoJSON[k][j][0];
			let yj = geoJSON[k][j][1];
			if ((y>=yi && y<=yj) || (y<=yi && y>=yj)) {
				if (x<xi && x<xj) {
					hasOddNodes = !hasOddNodes;
				} else {
					if ((x>xi && x<xj) || (x<xi && x>xj)) {
						let m = (yj - yi)/(xj - xi);
						let yk = (x-xi) * m + yi;
						if (y>yk) {
							hasOddNodes = !hasOddNodes;
						}
					}
				}
			}
			j = i;
		}
		if (hasOddNodes) {
			return true;
		}
	}
	return false;
}

module.exports = {
	pointInPolygon: pointInPolygon
}

/*
tests with features square and triangle

geoJSON = {};
geoJSON.geometry = {};
geoJSON.geometry.coordinates = [[[0,0], [2,0], [2,2], [0,2]], [[4,0], [5,0], [5,2]]];
pointInPolygon(1,1,geoJSON); //returns true
pointInPolygon(3,1,geoJSON); //returns false
pointInPolygon(4.5,1,geoJSON); //returns true
*/
