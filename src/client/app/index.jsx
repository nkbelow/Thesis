import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test.jsx';

class App extends React.Component {
  render () {
    return <Test />;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));