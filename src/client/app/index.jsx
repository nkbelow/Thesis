import React from 'react';
import { render } from 'react-dom'

import App from './App.jsx';
import ParkView from './ParkView.jsx';

import { BrowserRouter, Match, Miss } from 'react-router-dom'

class Root extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
	    <BrowserRouter>
	      <div>
	        <Match exactly pattern="/" component={App} />
	        <Match exactly pattern="/park/:name" component={ParkView} />
	      </div>
	    </BrowserRouter>    	
    )
  }
}

render(<Root />, document.getElementById('app'))

