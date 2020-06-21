import argvParser from '../argvParser'

const args = argvParser(process.argv);

const getHostname = () => {
	const host = args.host || '0.0.0.0';
	const port = args.port || 9000;

	return { host, port };
};

export default getHostname
