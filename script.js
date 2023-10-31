var numbers = [2,6,10,15,19]; // Create an array of numbers with at least 5 elements.

function calculateAverage(numbers) { //Write a loop that iterates over the array and calculates the sum of all the elements.
  let sum = 0
  for (let i=0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let avg = sum / numbers.length; //Calculate the average of the array elements by dividing the sum by the total number of elements.
 return avg
}

console.log (calculateAverage(numbers)) //Display the sum and average using console.log
