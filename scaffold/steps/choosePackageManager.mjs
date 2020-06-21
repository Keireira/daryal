/*
 * Here we should use the default readline because we do not have any deps yet
 */

import path from 'path'
import readline from 'readline'
import { spawn, exec } from 'child_process'

const DEFAULT_PM = 'yarn'

const choosePackageManager = (rl) => {
	const promise = new Promise((resolve) => {
		rl.question(`Yarn or NPM? (${DEFAULT_PM}): `, (res) => {
			const answer = res || DEFAULT_PM

			if (['npm', 'yarn'].includes(answer.toLowerCase())) {
				return resolve(answer)
			} else {
				return resolve(choosePackageManager(rl))
			}
		})
	})

	return promise
}

const main = async () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	})

	const selectedManager = await choosePackageManager(rl)

	rl.close()

	return selectedManager
}

export default main
