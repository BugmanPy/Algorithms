// Run the code to see detailed output
const array = [64, 25, 12, 22, 11];

function selectionSort(arr) {
	const arraylength = arr.length;
	console.log("=================== START SORTING =========================")
	for (let i = 0; i < arraylength; i++) {
		let smallestValue = arr[i];
		let positionOfSmallestValue = i
		console.log("Assume smallest value as ", smallestValue," at position ",positionOfSmallestValue)
		console.log(" ")
		for (let j = i; j < arraylength; j++) {
			if (smallestValue > arr[j]) {
				console.log(arr[j]," is smaller than ",smallestValue)
				smallestValue = arr[j];
				positionOfSmallestValue = j
				
			}
		}
		console.log("Bring smallest value(",smallestValue,") to position ",i)
		arr[positionOfSmallestValue] = arr[i]
		arr[i] = smallestValue

		console.log(arr)
		console.log("------- *** -------")
	}
	console.log("=================== END SORTING ===========================")
	console.log(" ")
	return arr
}

console.log(selectionSort(array))