/*
Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors];
}
*/

const organizeInstructors = function (instructors) {
  // function should return an object
  let courses = {};

  // loop through array of instructor objects
  for (let instructor of instructors) {
    // instructor has instructor.name and instructor.course
    let courseName = instructor.course;

    if (courses[courseName]) {
      // add name to array if it already exists
      courses[courseName].push(instructor.name);
    } else {
      // create array if it does not already exist
      courses[courseName] = [instructor.name];
    }
  }

  return courses;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
/*
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
*/
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
/*
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/