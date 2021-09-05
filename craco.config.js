// const {when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES} = require('@craco/craco')
// const path = require('path')

let target = 'web'
if (process.env.REACT_APP_MODE === 'electron') {
  target = 'electron-renderer'
}

module.exports = {
  webpack: {
    configure: {
      target: target,
    },
  },
}
