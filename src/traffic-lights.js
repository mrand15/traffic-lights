import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import intersectionImg from './intersection.png';
import carImg from './car.png';

const startPosition = {
  left: 400,
  top: 1000,
};

const wait = {
  left: 400,
  top: 600,
};

const leftTurn = {
  transform: 'rotate(-90deg)',
  left: 300,
  top: 400,
  transition: 'all 2s linear 0s, left 2s ease-in, top 2s ease-out',
};

class App extends Component {

  constructor () {
    super();

    this.state = {
      cars: [
        {
          position: startPosition,
        }
      ],
    };
  }

  componentDidMount () {
    window.setInterval(() => {
      const { cars } = this.state;

      cars.forEach((car) => {

        if (car.position.top > wait.top) {
          car.position = wait;
        } else {
          car.position = leftTurn;
        }
        
      });
      this.setState(cars);
    }, 1200);
  }

  render () {

    const { cars } = this.state;

    return (
      <div style={styles.intersection}>
        {cars.map((car, i) => (
          <div key={i} style={Object.assign({}, styles.car, car.position)}>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  intersection: {
    backgroundImage: `url(${intersectionImg})`,
    height: '1000px',
    width: '1000px',
    position: 'relative',
  },
  car: {
    backgroundImage: `url(${carImg})`,
    width: '100px',
    height: '100px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'absolute',
    transition: 'all 2s ease 0s',
  },
};

$(document).ready(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
