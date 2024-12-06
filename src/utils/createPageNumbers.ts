const createPageNumbers = (totalPages: number, start = 1) => {
	const arr = [];
	const arr2 = [];

	if (totalPages <= 5) {
		for (let i = 1; i <= totalPages; i++) {
			arr.push(i);
		}
		return arr;
	}

	if (start >= totalPages - 4) {
		for (let i = totalPages - 4; i <= totalPages; i++) {
			arr.push(i);
		}
		return arr;
	}

	const middleCount = 3;
	const endCount = 2;

	const maxStart = totalPages - middleCount - endCount + 1;
	const startAdjusted = Math.max(1, Math.min(start, maxStart));

	for (
		let i = startAdjusted;
		i < startAdjusted + middleCount && i <= totalPages;
		i++
	) {
		arr.push(i);
	}

	for (let i = totalPages; i > totalPages - endCount; i--) {
		if (!arr.includes(i)) arr2.push(i);
	}

	const pagesDisplay = arr.concat(arr2.reverse());
	return pagesDisplay;
};

export { createPageNumbers };
