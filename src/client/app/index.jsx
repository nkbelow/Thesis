import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import NavBar from './NavBar.jsx';
import ParkView from './ParkView.jsx';
import {Provider} from 'react-redux';
import store from '../reducers/store.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Root extends React.Component {
  constructor(props){
    super(props);
  }


  render () {
    const theStore = store();
    return (
      <Provider store={theStore}>
	    <Router forceRefresh={false} >
	      <div>
	        <Route exact path="/" component={App} />
	        <Route path="/park/:code" component={ParkView} />
	      </div>
	    </Router>    	
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('app'))

