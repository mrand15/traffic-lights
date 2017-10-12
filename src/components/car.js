import React, { Component } from 'react';
import carImg from '../car.png';

const statuses = {
  starting: 0,
  stopped: 1,
  atLights: 2,
  turning: 3,
  finishing: 4,
  finished: 5,
};

export default class Car extends Component {

  constructor (props) {
    super();

    this.state = {
      nextPostion: props.positions.start,
      status: statuses.starting,
    };
  };

  _nextPosition = () => {

    const { status } = this.state;
    const { lights, turn, finish, rotation } = this.props.positions;
    const { starting, atLights, turning, finishing } = statuses;

    switch (status) {
      case starting:
        return { nextPostion: lights, status: atLights };
      case atLights:
        return { nextPostion: turn, status: turning, rotation };
      case turning: 
        return { nextPostion: finish, status: finishing };
      case finishing:
        return;
    }
  }

  _checkPosition = () => {

    const { id } = this.props;
    let { nextPostion } = this.state;

    const { left, top } = $(`#${id}`).position();

    if (left !== nextPostion.left ||  top !== nextPostion.top) return;

    let newState = this._nextPosition();

    this.setState(newState);
  }

  componentDidMount () {

    window.setInterval(this._checkPosition, 5000);
    
  }

  render () {

    const { id } = this.props;
    const { nextPostion } = this.state;

    return (
      <div id={id} style={Object.assign({}, styles.car, nextPostion)}>
      </div>
    );
  }
}

const styles = {
  car: {
    backgroundImage: `url(${carImg})`,
    width: '100px',
    height: '100px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'absolute',
    transition: 'all 2s linear 0s',
  },
};
