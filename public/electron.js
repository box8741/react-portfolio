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

  // const menu = Menu.buildFromTemplate([
  //   ...(isMac
  //     ? [
  //         {
  //           label: app.name,
  //           submenu: [
  //             {role: 'about'},
  //             {type: 'separator'},
  //             {role: 'hide'},
  //             {role: 'hideOthers'},
  //             {role: 'unhide'},
  //             {type: 'separator'},
  //             {role: 'quit'},
  //           ],
  //         },
  //       ]
  //     : []),
  //   {
  //     label: 'Edit',
  //     submenu: [{role: 'undo'}, {role: 'redo'}, {type: 'separator'}, {role: 'cut'}, {role: 'copy'}, {role: 'paste'}],
  //   },
  // ])
  // Menu.setApplicationMenu(menu)
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  // if (isDev) mainWindow.webContents.openDevTools()

  // mainWindow.on('closed', () => {
  //   mainWindow = undefined!
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

  // windows
  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('isMaximized')
  })
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('isRestored')
  })

  // mac
  // mainWindow.on('enter-full-screen', () => {
  //   mainWindow.webContents.send('enterFullScreen')
  // })
  // mainWindow.on('leave-full-screen', () => {
  //   mainWindow.webContents.send('leaveFullScreen')
  // })

  ipcMain.on('closeApp', () => {
    mainWindow.close()
  })
}

app.on('ready', createWindow)

app.on('activate', function () {
  // if (mainWindow === null) createWindow()
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', function () {
  if (!isMac) app.quit()
})
