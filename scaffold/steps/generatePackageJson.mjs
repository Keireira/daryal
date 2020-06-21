import fs from 'fs'
import path from 'path'

import scripts from '../configs/scripts.json'
import dependencies from '../configs/dependencies.json'
import devDependencies from '../configs/devDependencies.json'

const generatePackageJson = async (config) => {
	const { default: jsonBeautify } = await import('json-beautify')

	const beautifiedPackageJson = jsonBeautify({
		...config,
		main: 'webpack.config.js',
		scripts,
		dependencies,
		devDependencies,
	}, null, 2, 120)

	const promise = new Promise((resolve, reject) => {
		fs.writeFile(path.resolve('./package.json'), beautifiedPackageJson, (err) => {
			if (err) {
				reject(err)
			}

			resolve()
		})
	})

	return promise
}

export default generatePackageJson
