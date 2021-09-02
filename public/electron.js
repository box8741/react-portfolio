const {app, BrowserWindow, Menu, ipcMain} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

const isMac = process.platform === 'darwin'

// let mainWindow

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    minWidth: 400,
    minHeight: 600,
    titleBarStyle: 'hidden',
    backgroundColor: '#45435E',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  // if (isDev) mainWindow.webContents.openDevTools()

  // mainWindow.on('closed', () => {
  //   mainWindow = null
  // })

  // custom click
  ipcMain.on('minimizeApp', () => {
    mainWindow.minimize()
  })

  ipcMain.on('maximizeRestoreApp', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore()
    } else {
      mainWindow.maximize()
    }
  })

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('isMaximized')
  })
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('isRestored')
  })

  ipcMain.on('closeApp', () => {
    mainWindow.close()
  })
}

// app.whenReady().then(createWindow)

app.on('ready', createWindow)

app.on('activate', function () {
  // if (mainWindow === null) createWindow()
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', function () {
  if (!isMac) app.quit()
})
