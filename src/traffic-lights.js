import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Car from './components/Car';
import TrafficLight from './components/TrafficLight';

import intersectionImg from './images/intersection.png';

class App extends Component {

  constructor () {
    super();

    this.state = {
      cars: [],
      lights: {
        north: 'green',
        south: 'red',
        east: 'red',
        west: 'red',
      },
    };

    this.carCount = 1;
  }

  _addCar = () => {
    const { cars, lights } = this.state;
    const directions = ['north','south','east','west'];
    const start = directions[Math.floor(Math.random()*directions.length)];
    const endings = directions.filter(direction => direction !== start);
    const end = endings[Math.floor(Math.random()*endings.length)];

    if (lights[start] !== 'green' && cars.filter(car => car.startLane === start ).length > 3 ) return;
    
    this.carCount++;
    
    const reversed = [...cars].reverse();
    const inFront =reversed.find(car => car.startLane === start);
    //console.log(inFront);
    const newCar = {
      id: this.carCount,
      startLane: start,
      endLane: end,
      inFront: inFront ? inFront.id : null,
    };

    const newCars = [
      ...cars,
      newCar
    ];

    this.setState({ cars: newCars });
  }

  _carTimeout = () => {
    window.setTimeout(() => {
      this._addCar();
      this._carTimeout();
    }, Math.floor(Math.random() * 2000) + 500);
  }

  componentDidMount () {
    this._carTimeout();
  }

  _removeCar = (id) => {
    const { cars } = this.state;
    const newCars = cars.filter(car => car.id !== id);
    this.setState({ cars: newCars });
  }

  render () {

    const { cars, lights } = this.state;
    return (
      <div style={styles.intersection}>
        {cars.map((car) => (
          <Car 
            key={car.id} 
            id={car.id}
            startLane={car.startLane}
            endLane={car.endLane}
            finish={() => this._removeCar(car.id)}
            light={lights[car.startLane]}
            inFront={car.inFront}
          />
        ))}
        {Object.keys(lights).map(light => (
          <TrafficLight
            key={light}
            direction={light}
            status={lights[light]}
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
