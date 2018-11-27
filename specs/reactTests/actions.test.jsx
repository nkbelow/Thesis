import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import actions from '../../src/client/actions/actions.js';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import jest from 'jest'
import rootReducer from '../../src/client/reducers/combineReducers.js'
import {getParks} from '../../src/client/actions/getParks.js'
import {getCampgrounds} from '../../src/client/actions/getCampgrounds.js'
import db from '../../src/db/index.js'
import server from '../../src/server/index.js'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
describe('Test', () => {
	  it('get parks should call start and failure park request actions with no filters passed in', () => {
	const store = mockStore({})
	const expectedActions = ['PARKS_REQUEST_START', 'PARKS_REQUEST_FAILURE']
	
	return store.dispatch(getParks())
	.then((err) => {
		console.log(err)
		const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedActions)
	})
})
})
