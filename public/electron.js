const {app, Tray, BrowserWindow, Menu} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

const isMac = process.platform === 'darwin'

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    minWidth: 400,
    minHeight: 400,
    titleBarStyle: 'hidden',
    backgroundColor: '#45435E',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  // if (isDev) mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// app.whenReady().then(createWindow)

app.on('ready', createWindow)

app.on('activate', function () {
  if (mainWindow === null) createWindow()
  // BrowserWindow.getAllWindows().length === 0 &&
})

app.on('window-all-closed', function () {
  if (!isMac) app.quit()
})
