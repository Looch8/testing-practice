const calculator = {
	add(n1, n2) {
		return n1 + n2;
	},
	subtract(n1, n2) {
		return n1 - n2;
	},
	multiply(n1, n2) {
		return n1 * n2;
	},
	divide(n1, n2) {
		return n1 / n2;
	},
};

console.log(calculator.add(2, 2));
console.log(calculator.subtract(4, 1));
console.log(calculator.multiply(4, 4));
console.log(calculator.divide(10, 2));

module.exports = calculator;
