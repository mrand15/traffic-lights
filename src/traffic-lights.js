import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Car from './components/car';

import intersectionImg from './intersection.png';

const lanes = {
  south: {
    positions: {
      start: {
        left: 400,
        top: 1000,
      },
      lights: {
        left: 400,
        top: 600,
      },
    },
  },
  west: {
    positions: {
      turn: {
        left: 300,
        top: 500,
        transition: 'all 1s linear 0s, left 1s ease-in, top 1s ease-out',
        transform: 'rotate(-90deg)',
      },
      finish: {
        left: -100,
        top: 500,
        transform: 'rotate(-90deg)',
      },
    },
  },
};

class App extends Component {

  constructor () {
    super();

    this.state = {
      cars: [
        {
          id: 'testCar',
          positions: {
            start: lanes.south.positions.start,
            lights: lanes.south.positions.lights,
            turn: lanes.west.positions.turn,
            finish: lanes.west.positions.finish,
          },
        }
      ],
    };
  }

  test = () => {

  }

  render () {

    const { cars } = this.state;
    return (
      <div style={styles.intersection}>
        {cars.map((car) => (
          <Car 
            key={car.id} 
            id={car.id}
            positions={car.positions}
          />
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
};

$(document).ready(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
