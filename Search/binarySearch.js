// Array has to be sorted for this to work
// You can remove all 'console.log'
let array = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44];

const valueToSearch = 31;
const lengthOfArray = array.length;
let low = 0;  // Lowest index number
let high = lengthOfArray - 1;  // highest index number


const binarySearch = (array, low, high, value) => {
  console.log("------------------- *** -------------------------");
  let valueToReturn;

	// Check if the higher value is greater than lower value
  if (high >= low) {
    console.log("High value: ", high);
    console.log("Low value: ", low);

		
    let middle = Math.floor(low + (high - low) / 2);  // Find the middle index 
    console.log("Middle value: ", middle);
    console.log("--- *** ---");

    if (array[middle] === value) {
      console.log(value, " is equal to ", array[middle]);
      console.log("End of story.");
      return array[middle];
    } else if (array[middle] < value) {
      console.log(value, " is greater than ", array[middle]);
      console.log("Moving up...");
			
      valueToReturn = binarySearch(array, middle + 1, high, value);  // Pick the upper half of the array [change 'low' value mid+1]
    } else {
      console.log(value, " is less than ", array[middle]);
      console.log("Moving down...");
      valueToReturn = binarySearch(array, low, middle - 1, value);  // Pick the lower half of the array [change 'high' value mid-1]
    }
  } else {
    console.log("High value: ", high);
    console.log("Low value: ", low);
    console.log("No match found.");
    valueToReturn = -1;  // If no match [high becomes less than low]
  }
  return valueToReturn;
};


console.log(">>>>>>", binarySearch(array, low, high, valueToSearch));


