import fs from 'fs'
import path from 'path'

const clearScaffold = async () => {
	const promise = new Promise((resolve, reject) => {
		fs.rmdir(path.resolve('./scaffold'), { recursive: true }, (err) => {
			if (err) {
				reject(err)
			}

			resolve()
		})
	})

	return promise
}

export default clearScaffold
