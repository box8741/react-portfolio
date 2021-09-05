import mkUtils from './utils'

export default {
  desktop: 1024,
  tablet: 768,
  mobile: 480,
  titleBarHeight: mkUtils.isElectron ? 28 : 0,
}
