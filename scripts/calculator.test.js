const calculator = require("./calculator");

test("takes two numbers and uses an addition operator and returns the total", () => {
	expect(calculator.add(2, 2)).toBe(4);
});

test("takes two numbers and uses a subtraction operator and returns the total", () => {
	expect(calculator.subtract(3, 1)).toBe(2);
});

test("takes two numbers and uses a divison operator and returns the total", () => {
	expect(calculator.divide(10, 2)).toBe(5);
});

test("takes two numbers and uses a multiplication operator and returns the total", () => {
	expect(calculator.multiply(2, 4)).toBe(8);
});
