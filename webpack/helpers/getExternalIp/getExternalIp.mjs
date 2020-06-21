import ip from 'ip'
import colors from 'colors/safe'

const getExternalIp = (port) => {
	const externalIp = `${ip.address()}:${port}`;
	const key = colors.green.bgBlack.bold('External IP:');
	const value = colors.yellow.bgBlack.bold(externalIp);

	return `${key}\t${value}`;
};

export default getExternalIp
