// BubbleSort
// Time Complexity O(n^2)
// Space Complexity O(1)

// Run the code to see detailed output
const array = [64, 25, 12, 22, 11];

function bubbleSort(arr) {
  let length = arr.length;
  console.log("Initial array", [...arr]);
  console.log("=================== START SORTING =========================");
  for (let i = length - 1; i >= 0; i--) {
    console.log("----------- *** ------------");
    console.log(`Inside main loop where i=${i} \n`);
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        console.log(
          `Swap since element ${j - 1} [${
            arr[j - 1]
          }] is greater than Element ${j} [${arr[j]}].`
        );
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
    console.log(`\nResultant array after this loop [${arr}]`);
  }
  console.log("=================== END SORTING ===========================\n");

  return arr;
}

console.log("Sorted array", bubbleSort(array));
