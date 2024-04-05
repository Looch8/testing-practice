function capitalize(string) {
	const firstToUpper = string.charAt(0).toUpperCase();
	const removeFirstLetter = string.slice(1);
	return firstToUpper + removeFirstLetter;
}

module.exports = capitalize;
