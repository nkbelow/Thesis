const map = (state = {
			center: [-98.5, 39],
    		zoom: [1],
    		skip: 0,
   		 	popupShowLabel: true,
   		 	parks: [{ states: 'ME',
    latLong: 'lat:44.30777545, long:-68.30063316',
    description: 'People have been drawn to the rugged coast of Maine throughout history. Awed by its beauty and diversity, early 20th-century visionaries donated the land that became Acadia National Park. The park is home to many plants and animals, and the tallest mountain on the U.S. Atlantic coast. Today visitors come to Acadia to hike granite peaks, bike historic carriage roads, or relax and enjoy the scenery.',
    designation: 'National Park',
    parkcode: 'acad',
    id: 1,
    directionsInfo: 'From Boston take I-95 north to Augusta, Maine, then Route 3 east to Ellsworth, and on to Mount Desert Island. For an alternate route, continue on I-95 north to Bangor, Maine, then take Route 1A east to Ellsworth. In Ellsworth, take Route 3 to Mount Desert Island.',
    directionsUrl: 'http://www.nps.gov/acad/planyourvisit/directions.htm',
    fullName: 'Acadia National Park',
    url: 'https://www.nps.gov/acad/index.htm',
    weatherInfo: 'Located on Mount Desert Island in Maine, Acadia experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C).',
    name: 'Acadia',
    latitude: 44.30777545,
    longitude: -68.30063316,
    visitors: 2474832 }],
   		 	popup: null}, action) => {
	
	switch (action.type) {
		case 'ADD_POPUP':
			console.log('adding popup in reducer, action.park: ', action.park, 'obj: ', Object.assign({}, state, {
				popup: action.park
			}))
			return Object.assign({}, state, {
				popup: action.park
			})
		case 'REMOVE_POPUP':
		console.log('removing popup in reducer', action)
			return Object.assign({}, state, {
				popup: null
			})
		default: 
			return state
	}
}

export default map;
