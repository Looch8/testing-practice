function calculateAverage(arr) {
	const sum = arr.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
	const average = sum / arr.length;
	return average;
}

function calculateMin(arr) {
	return Math.min(...arr);
}

function calculateMax(arr) {
	return Math.max(...arr);
}

function calculateLength(arr) {
	return arr.length;
}

function analyzeArray(arr) {
	const average = calculateAverage(arr);
	const min = calculateMin(arr);
	const max = calculateMax(arr);
	const length = calculateLength(arr);
	return {
		average,
		min,
		max,
		length,
	};
}

module.exports = analyzeArray;
