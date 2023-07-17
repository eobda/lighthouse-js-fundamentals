const smartGarbage = function (trash, bins) {
  // Your code in here ...
  switch (trash) {
    case 'waste':
      bins.waste += 1;
      break;
    case 'recycling':
      bins.recycling += 1;
      break;
    case 'compost':
      bins.compost += 1;
      break;
    default:
      console.log("Not a type of garbage");
  }

  return bins;
}