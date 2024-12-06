const formatNumber = function (number: number) {
	return ("" + number)
		.split("")
		.reverse()
		.map((val, i, array) =>
			i % 3 === 0 && i !== array.length && i !== 0 ? val + "," : val
		)
		.reverse();
};

export default formatNumber;
