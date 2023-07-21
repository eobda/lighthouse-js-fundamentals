/* Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one. */

const instructorWithLongestName = function(instructors) {
  // variable stores the current longest name

  let longestName = {
    name: "",
    course: ""
  }

  // loop over each object in array (instructor)
  instructors.forEach(function(instructor) {
    
    // measure VALUE length of KEY "name"
    if (instructor.name.length > longestName.name.length) {

      // if it is longer than the previous length, it replaces the old value AND the course replaces the old course
      // if it is EQUAL to the previous length, NO CHANGE
      longestName.name = instructor.name;
      longestName.course = instructor.course;
    }
  })

  return longestName;
  
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); // {name: "Jeremiah", course: "Web"}
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); // {name: "Domascus", course: "Web"}