var numbers = [2,6,10,15,19];

function calculateAverage(numbers) {
  let sum = 0
  for (let i=0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let avg = sum / numbers.length;
 return avg
}

console.log (calculateAverage(numbers))