import { spawn } from 'child_process'

const initGit = async () => {
	const git = spawn('git', ['init'], {
		detached: true,
		stdio: 'inherit',
	})

	const promise = new Promise((resolve, reject) => {
		git.on('close', () => {
			resolve()
		})

		git.on('error', (error) => {
			const errorUTF8 = error.toString('utf8')

			reject(errorUTF8)
		})
	})

	return promise
}

export default initGit
