import path from 'path'

const defaultValues = {
	name: path.basename(path.resolve('.')),
	description: '',
	version: '0.0.1',
	license: 'unlicense',
}

// How to generate a package.json
const getInitiationType = async (inquirer) => {
	const { initType } = await inquirer.prompt({
		type: 'list',
		name: 'initType',
		message: 'How to generate a package.json?',
		choices: ['auto', 'core', 'config'],
		default: 'core',
	})

	return initType
}

// The most important fields of package.json
const getProjectInfoFields = async (inquirer) => {
	const options = await inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Package name:',
			default: defaultValues.name,
		},
		{
			type: 'input',
			name: 'description',
			message: 'Description:',
			default: defaultValues.description,
		},
		{
			type: 'input',
			name: 'version',
			message: 'Initial version:',
			default: defaultValues.version,
		},
	])

	return options
}

// license field
const getLicenseCode = async (inquirer) => {
	const { license } = await inquirer.prompt({
		type: 'list',
		name: 'license',
		message: 'License:',
		choices: [
			{ name: 'MIT', value: 'mit' },
			{ name: 'The Unlicense', value: 'unlicense' },
			{ name: 'Another', value: 'another' }
		],
		default: defaultValues.license,
	})

	if (license !== 'another') {
		return license
	}

	const { customLicense } = await inquirer.prompt({
		type: 'input',
		name: 'customLicense',
		message: 'SPDX Identifier:',
		default: '',
	})

	return customLicense
}

const createProjectConfig = async () => {
	const { default: inquirer } = await import('inquirer');

	const initType = await getInitiationType(inquirer)

	if (initType === 'auto') {
		return defaultValues
	}

	const { name, description, version } = await getProjectInfoFields(inquirer)
	const license = await getLicenseCode(inquirer)

	return { name, description, version, license }
}

export default createProjectConfig
