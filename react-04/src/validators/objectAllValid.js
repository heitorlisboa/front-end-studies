function objectAllValid(object) {
	for (let insideObject of Object.values(object)) {
		if (!insideObject.valid) {
			return false;
		}

		return true;
	}
}

export { objectAllValid };
