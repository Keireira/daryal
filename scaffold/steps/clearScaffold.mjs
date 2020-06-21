import fs from 'fs'
import path from 'path'

const clearScaffold = async () => {
	const scaffoldPromise = new Promise((resolve, reject) => {
		fs.rmdir(path.resolve('./scaffold'), { recursive: true }, (err) => {
			if (err) reject(err)

			resolve()
		})
	})

	const nodeModulesPromise = new Promise((resolve, reject) => {
		fs.rmdir(path.resolve('./node_modules'), { recursive: true }, (err) => {
			if (err) reject(err)

			resolve()
		})
	})

	const yarnPromise = new Promise((resolve, reject) => {
		fs.unlink(path.resolve('./yarn.lock'), (err) => {
			if (err) reject(err)

			resolve()
		})
	})

	return Promise.all([scaffoldPromise, nodeModulesPromise, yarnPromise])
}

export default clearScaffold
