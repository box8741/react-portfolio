import isElectron from 'is-electron'

type OperatingSystemType = 'Unknown' | 'Windows' | 'Mac' | 'UNIX' | 'Linux'
type CurrentBrowserType = 'Unknown' | 'Chrome' | 'Firefox' | 'IE' | 'Edge' | 'Safari' | 'Opera'

const getOperatingSystem = () => {
  let operatingSystem: OperatingSystemType = 'Unknown'
  if (window.navigator.userAgent.indexOf('Win') !== -1) operatingSystem = 'Windows'
  if (window.navigator.userAgent.indexOf('Mac') !== -1) operatingSystem = 'Mac'
  if (window.navigator.userAgent.indexOf('X11') !== -1) operatingSystem = 'UNIX'
  if (window.navigator.userAgent.indexOf('Linux') !== -1) operatingSystem = 'Linux'
  return operatingSystem
}

const getBrowser = () => {
  let currentBrowser: CurrentBrowserType = 'Unknown'
  if (window.navigator.userAgent.indexOf('Chrome') !== -1) currentBrowser = 'Chrome'
  else if (window.navigator.userAgent.indexOf('Firefox') !== -1) currentBrowser = 'Firefox'
  else if (window.navigator.userAgent.indexOf('MSIE') !== -1) currentBrowser = 'IE'
  else if (window.navigator.userAgent.indexOf('Edge') !== -1) currentBrowser = 'Edge'
  else if (window.navigator.userAgent.indexOf('Safari') !== -1) currentBrowser = 'Safari'
  else if (window.navigator.userAgent.indexOf('Opera') !== -1) currentBrowser = 'Opera'
  else console.log('Others')
  return currentBrowser
}

export default {
  OS: getOperatingSystem(),
  Browser: getBrowser(),
  isElectron: process.env.REACT_APP_MODE === 'electron',
  // isElectron: isElectron(),
}
