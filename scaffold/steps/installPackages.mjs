import { spawn } from 'child_process'

const installPackages = async (packageManager) => {
	const install = spawn(packageManager, ['install'], {
		detached: true,
		stdio: 'inherit',
	})

	const promise = new Promise((resolve, reject) => {
		install.on('close', () => {
			resolve()
		})

		install.on('error', (error) => {
			const errorUTF8 = error.toString('utf8')

			reject(errorUTF8)
		})
	})

	return promise
}

export default installPackages
