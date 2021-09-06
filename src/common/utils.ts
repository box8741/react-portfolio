type OperatingSystemType = 'Unknown' | 'Windows' | 'Mac' | 'UNIX' | 'Linux'
type CurrentBrowserType = 'Unknown' | 'Chrome' | 'Firefox' | 'IE' | 'Edge' | 'Safari' | 'Opera'

const isMobile = () => {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
}

const getOperatingSystem = () => {
  let operatingSystem: OperatingSystemType = 'Unknown'
  if (navigator.userAgent.indexOf('Win') !== -1) operatingSystem = 'Windows'
  if (navigator.userAgent.indexOf('Mac') !== -1) operatingSystem = 'Mac'
  if (navigator.userAgent.indexOf('X11') !== -1) operatingSystem = 'UNIX'
  if (navigator.userAgent.indexOf('Linux') !== -1) operatingSystem = 'Linux'
  return operatingSystem
}

const getBrowser = () => {
  let currentBrowser: CurrentBrowserType = 'Unknown'
  if (navigator.userAgent.indexOf('Chrome') !== -1) currentBrowser = 'Chrome'
  else if (navigator.userAgent.indexOf('Firefox') !== -1) currentBrowser = 'Firefox'
  else if (navigator.userAgent.indexOf('MSIE') !== -1) currentBrowser = 'IE'
  else if (navigator.userAgent.indexOf('Edge') !== -1) currentBrowser = 'Edge'
  else if (navigator.userAgent.indexOf('Safari') !== -1) currentBrowser = 'Safari'
  else if (navigator.userAgent.indexOf('Opera') !== -1) currentBrowser = 'Opera'
  else console.log('Others')
  return currentBrowser
}

export default {
  OS: getOperatingSystem(),
  Browser: getBrowser(),
  isMobile: isMobile(),
  isElectron: process.env.REACT_APP_MODE === 'electron',
}
