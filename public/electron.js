const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // alwaysOnTop: true,
    // center: true,
    // fullscreen: true,
    // kiosk: !isDev,
    // resizable: true,
    webPreferences: {
      nodeIntegration: true,
      // preload: path.join(__dirname, 'preload.js'),
    },
  })
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  if (isDev) mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
