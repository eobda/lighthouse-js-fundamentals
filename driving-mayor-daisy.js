const carPassing = function (cars, speed) {
  // Your code in here ...
  let newArray = cars;

  let newCar = {
    time: Date.now(),
    speed: speed
  }

  newArray.push(newCar);

  return newArray;
}

/* test:
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)

// should return

[
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  },
  {
    time: 1568431216417,
    speed: 38
  }
] */