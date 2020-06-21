import {
	choosePackageManager,
	removeUselessFiles,
	initGit,
	installPackages,
	createProjectConfig,
	generatePackageJson,
	clearScaffold
} from './steps'

const main = async () => {
	const packageManager = await choosePackageManager()

	await removeUselessFiles()
	await initGit()
	await installPackages(packageManager)

	const config = await createProjectConfig()
	await generatePackageJson(config)

	await clearScaffold()
	await installPackages(packageManager)
}

try {
	main()
} catch (err) {
	console.error(err)
}
