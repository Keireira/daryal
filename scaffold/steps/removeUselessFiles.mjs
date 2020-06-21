import fs from 'fs'
import path from 'path'

const WHITELIST = [
	'scaffold',
	'src',
	'webpack',
	'.browserslistrc',
	'.editorconfig',
	'.eslintignore',
	'.gitattributes',
	'.gitignore',
	'LICENSE.md',
	'README.md',
	'package.json',
	'yarn.lock'
]

const removeUselessFiles = async () => {
	const currentDir = path.resolve('.')

	const promise = new Promise((resolve, reject) => {
		fs.readdir(currentDir, (err, fileNames) => {
			if (err) {
				reject(err)
			}

			for (let i = 0; i < fileNames.length; i++) {
				const fileName = fileNames[i]

				if (WHITELIST.includes(fileName)) {
					continue
				}

				const filePath = path.resolve(fileName)
				const pathInfo = fs.lstatSync(filePath)

				if (pathInfo.isDirectory()) {
					fs.rmdirSync(filePath, { recursive: true })
				} else if (pathInfo.isFile()) {
					fs.unlinkSync(filePath)
				}
			}

			resolve()
		})
	})

	return promise
}

export default removeUselessFiles
