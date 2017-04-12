import React from 'react';
import { render } from 'react-dom'

import App from './App.jsx';
import ParkView from './ParkView.jsx';

import { BrowserRouter, Match, Miss } from 'react-router'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/park/:name" component={ParkView} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('app'))

