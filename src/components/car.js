import React, { Component } from 'react';
import carImg from '../images/car.png';
import lanes from '../shared/lanes';

const statuses = {
  starting: 0,
  stopped: 1,
  atLights: 2,
  turning: 3,
  finishing: 4,
  finished: 5,
};

const directions = {
  north: 0,
  east: 1,
  south: 2,
  west: 3,
};

export default class Car extends Component {

  constructor (props) {
    super();
    
    this.state = {
      nextPostion: lanes[props.startLane].start,
      status: statuses.starting,
    };
  }

  _queuePosition = () => {

    const { startLane, endLane, light, inFront } = this.props;

    if (inFront && light !== 'green') {
      const { left, top } = $(`#${inFront}`).position();
      let nextPostion = { left, top };
      switch (startLane) {
        case 'north': 
          nextPostion.top -= 125;
          break;
        case 'south':
          nextPostion.top += 125;
          break;
        case 'east':
          nextPostion.left += 125;
          break;
        case 'west':
          nextPostion.left -= 125;
          break;
      }
      return { nextPostion, status: statuses.stopped };
    }
  }

  _nextPosition = () => {

    const { status } = this.state;
    const { startLane, endLane, light, inFront } = this.props;
    const { starting, atLights, turning, finishing, stopped } = statuses;
    const { lights } = lanes[startLane];
    const { turn, finish } = lanes[endLane];

    switch (status) {
      case starting:
      if (inFront && light !== 'green') return this._queuePosition();
        return { nextPostion: lights, status: atLights };
      case atLights:
        if (light !== 'green') return null;
        return { nextPostion: turn, status: turning };
      case turning: 
        return { nextPostion: finish, status: finishing };
      case finishing:
        this.props.finish();
    }
    return null;
  }

  _checkPosition = () => {
    
    const { id } = this.props;
    let { nextPostion } = this.state;

    const { left, top } = $(`#${id}`).position();

    if (left !== nextPostion.left || top !== nextPostion.top) return;

    let newState = this._nextPosition();

    if (newState) this.setState(newState);
  }

  _getRotation = () => {

    const { startLane, endLane } = this.props;
    let rotation = 0;


    if (this.state.status < statuses.turning) {
      rotation = lanes[startLane].rotation;
    } else {
      rotation = (lanes[endLane].rotation + 180);
      if ((rotation - lanes[startLane].rotation) > 90) {
        rotation = rotation -360;
      }
    }

    return { transform: `rotate(${rotation}deg)` };
  }

  _getTransition = () => {

    const { startLane, endLane, light } = this.props;
    let transition = 'all 2s linear 0s';


    if (this.state.status === statuses.atLights) {
      if (light !== 'green') transition = 'all 2.5s ease-out 0s';
    } else if (this.state.status === statuses.turning) {
      if ((directions[startLane] + directions[endLane]) % 2 === 0) {
        transition = 'all 1.5s linear 0s';
      } else {

        let speed = '2s';
        if (((directions[startLane] + 1) % 4) == directions[endLane]) {
          speed = '1s';
        }

        switch (endLane) {
          case 'north' :
          case 'south' :
            transition = `transform ${speed} linear 0s, left ${speed} ease-out, top ${speed} ease-in`;
            break;
          case 'east' :
          case 'west' :
            transition = `transform ${speed} linear 0s, left ${speed} ease-in, top ${speed} ease-out`;
            break;
        }

      }
    }

    return { transition: transition };
  }

  componentDidMount () {
    const { id } = this.props;
    $(`#${id}`).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', this._checkPosition);
    this._checkPosition();
  }

  render () {

    const { id } = this.props;
    const { nextPostion } = this.state;

    return (
      <div id={id} style={Object.assign({}, styles.car, nextPostion, this._getRotation(), this._getTransition())}>
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
    //transition: 'all 2s linear 0s',
  },
};
