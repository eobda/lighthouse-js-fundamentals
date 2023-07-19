const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let judgement = 0;
  let submitter = '';

  // iterate over given array
  for (let vegetable of vegetables) {
    // check if given metric is included in the object's keys
    if (Object.keys(vegetable).includes(metric)) {
      // updates the judgement counter if the object's key value is higher
      if (vegetable[metric] > judgement) {
        judgement = vegetable[metric];
        // updates the submitter with the highest key value for given metric
        submitter = vegetable.submitter;
      }
    }
  }

  return submitter;
}


// test:
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));

/* should return:
"Old Man Franklin" */