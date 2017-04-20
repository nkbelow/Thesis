import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {individualPark} from './getParkReducer.js'

export default function configureStore(initialState) {
    return createStore(
        individualPark,
        initialState,
        applyMiddleware(thunk, createLogger())

    );
}