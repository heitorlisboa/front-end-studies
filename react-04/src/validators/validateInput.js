function validateInput(input, regex) {
	let combinedMatches = "";
	const matches = [...input.matchAll(regex)];
	matches.forEach((match) => {
		combinedMatches += match[0];
	});

	return combinedMatches;
}

export { validateInput };
