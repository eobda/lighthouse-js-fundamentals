const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let a = 0;
while (a < ingredients.length) {
  console.log(ingredients[a]);
  a++;
}

// Write a for loop that prints out the contents of ingredients:
for (let b = 0; b < ingredients.length; b++) {
  console.log(ingredients[b]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let c = ingredients.length - 1; c >= 0; c--) {
  console.log(ingredients[c]);
}