const {app, BrowserWindow } = require('electron');

let window;

app.on('ready', () => {
	window = new BrowserWindow({
		width: 800,
		height: 1150,
		webPreferences: {
			nodeIntegration: true
		}
	});

	window.loadFile('index.html');
});
