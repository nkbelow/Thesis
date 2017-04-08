import React from 'react';
import ReactDOM from 'react-dom';
import Try from './try.jsx';

class App extends React.Component {
  render () {
    return <Try />;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));