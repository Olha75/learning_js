if (confirm('Почати тестування?')) {
	//2.1. Відобразити трикутник за допомогою символів «о»

	const thinSpace = '\u2009';
	for (let rowNumber = 1; rowNumber <= 7; rowNumber++) {
		let rowPyramid = '';
		for (let spaces = 0; spaces < 7 - rowNumber; spaces++) {
			rowPyramid += `${thinSpace}`;
		}

		for (let symbol = 0; symbol < rowNumber; symbol++) {
			rowPyramid += 'o';
			if (symbol < rowNumber - 1) {
				rowPyramid += '';
			}
		}

		document.write(rowPyramid + '<br>');
	}
}
