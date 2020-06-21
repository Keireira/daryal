import colors from 'colors/safe';
import getHostname from '../getHostname'

const getLocalIp = (host, port) => {
	const hostname = getHostname()
	const realHost = host || hostname.host || ''
	const realPort = port || hostname.port || ''

	const localIP = `http://${realHost}:${realPort}`;
	const key = colors.green.bgBlack.bold('Local IP:');
	const value = colors.yellow.bgBlack.bold(localIP);

	return `${key}\t${value}`;
};

export default getLocalIp
