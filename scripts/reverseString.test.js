const reverseString = require("./reverseString");

test("takes a string and returns it reversed", () => {
	expect(reverseString("hello")).toBe("olleh");
	expect(reverseString("world")).toBe("dlrow");
});
