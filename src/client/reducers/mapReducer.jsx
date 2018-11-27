const map = (state = {popup: null}, action) => {	
	switch (action.type) {
		case 'ADD_POPUP':
			return Object.assign({}, state, {
				popup: action.park
			})
		case 'REMOVE_POPUP':
			return Object.assign({}, state, {
				popup: null
			})
		default: 
			return state
	}
}

export default map;
