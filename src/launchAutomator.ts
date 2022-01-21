/**
 * 开启微信开发者工具预览小程序
 */
const automator = require('miniprogram-automator')
import fs from 'fs'
import { isDirectory } from 'youtils-node'

const currentWorkSpace = process.cwd()
const distDir = `${currentWorkSpace}/dist`

if (!isDirectory(distDir)) {
	fs.mkdirSync(distDir, {
		recursive: true,
	})
}

export default () => {
	// 打开微信开发者工具
	automator
		.launch({
			projectPath: distDir,
		})
		.then(() => {
			console.log('微信开发者工具已开启，可以开始调试')
			process.exit()
		})
}
