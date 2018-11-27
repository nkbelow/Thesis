const pointInPolygon = (x, y, features) => {
	for (let k = 0; k<features.length; k++) {
		let j = features[k].length-1;
		let hasOddNodes = false;
		for (let i = 0; i<features[k].length; i++) {
			let xi = features[k][i][0]; 
			let yi = features[k][i][1];
			let xj = features[k][j][0]; 
			let yj = features[k][j][1];
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



module.exports.pointInPolygon = pointInPolygon;