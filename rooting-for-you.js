const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let judgement = 0;
  let submitter = '';

  for (let vegetable of vegetables) {
    if (vegetable.metric > judgement) {
      judgement = vegetable.metric;
      submitter = vegetable.submitter;
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