let array = [32, 69, 75, 123, 58, 423, 98, 1, 5, 78, 25];
const valueToSearch = 98;

function Search(array, value) {
	n = array.length;
	for (let element of array) {
		if (element === value) {
			console.log('Value exists');
			return;
		}
	}
	console.log('No match found');
}

Search(array,valueToSearch)