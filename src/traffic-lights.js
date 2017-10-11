import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  render () {
    return (
      <img src="intersection.png" />
    );
  }
}

$(document).ready(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
