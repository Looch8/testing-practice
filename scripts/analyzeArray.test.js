const analyzeArray = require("./analyzeArray");

test("sums all numbers in array and then returns the average", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Returns min value in array", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Returns max value in array", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Returns the length of an array", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
