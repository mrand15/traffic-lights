const lanes = {
  south: {
    start: {
      left: 400,
      top: 1000,
    },
    lights: {
      left: 400,
      top: 600,
    },
    turn: {
      left: 500,
      top: 600,
      transform: 'rotate(180deg)',
      transition: 'all 1s linear 0s, left 1s ease-out, top 1s ease-in',
    }, 
    finish: {
      left: 500,
      top: 1000,
      transform: 'rotate(180deg)',
    },
  },
  west: {
    start: {
      top: 400,
      left: 0,
      transform: 'rotate(90deg)',
    },
    lights: {
      left: 300,
      top: 400,
      transform: 'rotate(90deg)',
    },
    turn: {
      left: 300,
      top: 500,
      transition: 'all 1s linear 0s, left 1s ease-in, top 1s ease-out',
      transform: 'rotate(270deg)',
    },
    finish: {
      left: -100,
      top: 500,
      transform: 'rotate(270deg)',
    },
  },
  east: {
    start: {
      top: 500,
      left: 1000,
      transform: 'rotate(270deg)',
    },
    lights: {
      left: 600,
      top: 500,
      transform: 'rotate(270deg)',
    },
    turn: {
      left: 600,
      top: 400,
      transition: 'all 1s linear 0s, left 1s ease-in, top 1s ease-out',
      transform: 'rotate(90deg)',
    },
    finish: {
      left: 1000,
      top: 400,
      transform: 'rotate(90deg)',
    },
  },
  north: {
    start: {
      top: 0,
      left: 500,
      transform: 'rotate(180deg)',
    },
    lights: {
      left: 500,
      top: 300,
      transform: 'rotate(180deg)',
    },
    turn: {
      left: 400,
      top: 300,
      transition: 'all 1s linear 0s, left 1s ease-out, top 1s ease-in',
    },
    finish: {
      left: 400,
      top: 0,
    },
  },
};

export default lanes;
