// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  // volume = (4/3) * PI * (radius ** 3)
  return (4/3) * PI * (radius ** 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // volume = (1/3) * PI * (radius ** 2) * height
  return (1/3) * PI * (radius ** 2) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // volume = height * width * depth
  return height * width * depth;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;

  // solids is an array of objects

  for (let solid of solids) {

    // check the 'type' of each object
    // if type === sphere, use sphereVolume and object's radius
    // if type === cone, use coneVolume and object's radius and height
    // if type === prism, use prismVolume and object's height, width, depth

    switch (solid.type) {
      case "sphere":
        total += sphereVolume(solid.radius);
        break;
      case "cone":
        total += coneVolume(solid.radius, solid.height);
        break;
      case "prism":
        total += prismVolume(solid.height, solid.width, solid.depth);
        break;
      default:
        return false;
    }
  }

  return total;

};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);