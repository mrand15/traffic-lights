import React, { Component } from 'react';

import greenLight from '../images/green-light.png';
import yellowLight from '../images/yellow-light.png';
import redLight from '../images/red-light.png';

const lightPositions = {
  north: {
    top: 300,
    left: 600,
    transform: 'rotate(180deg)',
  },
  south: {
    top: 600,
    left: 300,
  },
  east: {
    top: 600,
    left: 600,
    transform: 'rotate(-90deg)',
  },
  west: {
    top: 300,
    left: 300,
    transform: 'rotate(90deg)',
  },
};

export default class TrafficLight extends Component {

  render () {

    const position = lightPositions[this.props.direction];

    let image = null;
    switch (this.props.status) {
      case 'green':
        image = greenLight;
        break;
      case 'red':
        image = redLight;
        break;
      case 'yellow':
        image = yellowLight;
        break;
    }

    return (
      <div style={Object.assign({}, styles.light, { backgroundImage: `url(${image})` }, position)}></div>
    );
  }
}

const styles = {
  light: {
    //backgroundImage: `url(${carImg})`,
    height: '100px',
    width: '100px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'absolute',
    //transition: 'all 2s linear 0s',
  },
};
