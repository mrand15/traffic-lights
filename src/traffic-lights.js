import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Car from './components/car';

import intersectionImg from './intersection.png';

class App extends Component {

  constructor () {
    super();

    this.state = {
      cars: [
        {
          id: 1,
          startLane: 'south',
          endLane: 'west',
          /*
          positions: {
            start: lanes.south.positions.start,
            lights: lanes.south.positions.lights,
            turn: lanes.west.positions.turn,
            finish: lanes.west.positions.finish,
          },*/
        }
      ],
    };

    this.carCount = 1;
  }

  componentDidMount () {
        
    window.setInterval(() => {

      const { cars } = this.state;
      const directions = ['north','south','east','west'];
      const start = directions[Math.floor(Math.random()*directions.length)];
      const endings = directions.filter(direction => direction !== start);
      const end = endings[Math.floor(Math.random()*endings.length)];

      
      this.carCount++;

      const newCar = {
        id: this.carCount,
        startLane: start,
        endLane: end,
      };

      const newCars = [
        ...cars,
        newCar
      ];

      this.setState({ cars: newCars });

    }, 1000);
  }

  _removeCar = (id) => {
    const { cars } = this.state;
    const newCars = cars.filter(car => car.id !== id);
    this.setState({ cars: newCars });
  }

  render () {

    const { cars } = this.state;
    return (
      <div style={styles.intersection}>
        {cars.map((car) => (
          <Car 
            key={car.id} 
            id={car.id}
            startLane={car.startLane}
            endLane={car.endLane}
            finish={() => this._removeCar(car.id)}
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
