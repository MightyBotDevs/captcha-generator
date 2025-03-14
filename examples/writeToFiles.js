const path = require("path"),
	fs = require("fs/promises"),
	Captcha = require("../");

(async () => {
	let captcha = new Captcha();
	await fs.writeFile(path.join(__dirname, 'captcha.jpeg'), captcha.JPEGStream)
	await fs.writeFile(path.join(__dirname, 'captcha.png'), captcha.PNGStream)
})()

