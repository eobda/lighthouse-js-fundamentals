/*
Create a function named blocksAway that will receive an array of
directions, and return an object that calculates how far north and east
those directions will take someone.

The taxi driver will always start at the same position, in the most south
west position on the grid. This means that the output will only need to
specify an east and north position, since the taxi driver can only end up
in these East and North of the starting point.
*/

const blocksAway = function (directions) {
  // return object
  let driverPosition = { east: 0, north: 0 };
  let driverFace = "north";

  // moves are in pairs (directions[even] and directions[odd])
  for (let i = 0; i < directions.length - 1; i++) {
    if (driverFace === "north") {
      switch (directions[i]) {
        case "right":
          driverPosition.east += directions[i + 1];
          driverFace = "east";
          break;
        case "left":
          driverPosition.east -= directions[i + 1];
          driverFace = "west";
          break;
      }
    } else if (driverFace === "south") {
      switch (directions[i]) {
        case "right":
          driverPosition.east -= directions[i + 1];
          driverFace = "west";
          break;
        case "left":
          driverPosition.east += directions[i + 1];
          driverFace = "east";
          break;
      }
    } else if (driverFace === "west") {
      switch (directions[i]) {
        case "right":
          driverPosition.north += directions[i + 1];
          driverFace = "north";
          break;
        case "left":
          driverPosition.north -= directions[i + 1];
          driverFace = "south";
          break;
      }
    } else if (driverFace === "east") {
      switch (directions[i]) {
        case "right":
          driverPosition.north -= directions[i + 1];
          driverFace = "south";
          break;
        case "left":
          driverPosition.north += directions[i + 1];
          driverFace = "north";
          break;
      }
    }
  }

  return driverPosition;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/*
expected output:
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/