const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const {app, BrowserWindow, ipcMain} = electron;

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false, 
        },
    })

    win.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow();
});

ipcMain.on('video:submit', (event, path) =>{
    win.webContents.send('video:metadata', path);
});