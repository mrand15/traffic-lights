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
    }, 
    finish: {
      left: 500,
      top: 1000,
    },
    rotation: 0,
  },
  west: {
    start: {
      top: 400,
      left: -100,
    },
    lights: {
      left: 300,
      top: 400,
    },
    turn: {
      left: 300,
      top: 500,
    },
    finish: {
      left: -100,
      top: 500,
    },
    rotation: 90,
  },
  east: {
    start: {
      top: 500,
      left: 1000,
    },
    lights: {
      left: 600,
      top: 500,
    },
    turn: {
      left: 600,
      top: 400,
    },
    finish: {
      left: 1000,
      top: 400,
    },
    rotation: -90,
  },
  north: {
    start: {
      top: -100,
      left: 500,
    },
    lights: {
      left: 500,
      top: 300,
    },
    turn: {
      left: 400,
      top: 300,
    },
    finish: {
      left: 400,
      top: -100,
    },
    rotation: 180,
  },
};

export default lanes;
