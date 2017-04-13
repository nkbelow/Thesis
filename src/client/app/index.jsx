import React from 'react';
import { render } from 'react-dom'

import App from './App.jsx';
import ParkView from './ParkView.jsx';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Root extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
	    <Router>
	      <div>
	        <Route exact path="/" component={App} />
	        <Route path="/park/:code" component={ParkView} />
	      </div>
	    </Router>    	
    )
  }
}

render(<Root />, document.getElementById('app'))

