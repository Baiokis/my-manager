const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Novo caminho corrigido
    win.loadFile(path.join(__dirname, '../dist/my-manager/browser/index.html'));

    win.webContents.openDevTools(); // Para depuração
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
