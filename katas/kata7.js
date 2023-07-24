/*
Implement a function called checkAir(), which will check a collection of
air samples. The function will take in two arguments. The first argument
is an array of strings, where each string represents a small air sample
that is either clean or dirty. The second argument is a number
representing the highest acceptable amount of dirty samples. For example,
a threshold of 0.4 means that there must be less than 40% of total samples
classified as dirty for our air to be considered clean. Our function must
return Polluted if there are too many dirty air samples, or Clean if the
proportion of dirty samples is below the threshold.
*/

const checkAir = function (samples, threshold) {
  // find number of dirty samples in array
  let dirtySamples = 0;
  for (let sample of samples) {
    if (sample === 'dirty') {
      dirtySamples += 1;
    }
  }

  // calculate percentage of array that is dirty
  let samplePercentage = dirtySamples / samples.length;
  if (samplePercentage > threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); // Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); // Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) // Clean
