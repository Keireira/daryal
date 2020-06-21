const parseKey = (key = '') => key.slice(key.slice(0, 2).lastIndexOf('-') + 1);

const parseValue = (value = '') => {
	if (!value) {
		return true;
	}

	switch(value) {
		case(Number.isInteger(parseInt(value, 10))):
			return parseFloat(value);

		case('false'):
			return false;

		case('true'):
			return true;

		default:
			return value;
	}
};

const argvParser = (argv = []) => {
	const args = argv.slice(2);

	const output = args.reduce((acc, arg) => {
		if (!arg.startsWith('-')) {
			return acc;
		}

		const splitted = arg.split('=');
		const key = parseKey(splitted[0]);
		const value = parseValue(splitted[1]);

		return {
			...acc,
			[key]: value,
		};
	}, {});

	return output;
};

export default argvParser
