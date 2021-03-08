const array = [12, 11, 13, 5, 6];

function insertionSort(arr) {
	console.log("=================== START SORTING =========================")
	for(let i = 1; i < arr.length; i++) {
		console.log('----------- *** ------------')
		console.log("Element ",i,"[",arr[i],"]")
		let temporaryStore = arr[i]
		let j = i
		while(j>0 && arr[j] < arr[j-1]){
			console.log("Element ",i,"[",arr[j],"] is less than Element ",j-1,"[",arr[j-1],"]. Switching...")
			arr[j] = arr[j-1]
			arr[j-1] = temporaryStore

			console.log("Now element ",j," is ",arr[j])
			console.log("Now element ",j-1," is ",arr[j-1])
			console.log(' ')
			j--
		}
	}
	console.log("=================== END SORTING ===========================")
	console.log(" ")
	return arr
}

console.log(insertionSort(array))