import {useState, useEffect} from 'react'
import {useMediaQuery} from '@material-ui/core'

const Hooks = () => {
  return {
    isMobile: useMediaQuery('(max-width:740px)'),
  }
}

export default {
  Hooks,
  themeColorDark: '#1b1b1b',
  themeColorNormal: '#424242',
  themeColorLight: '#6d6d6d',
}
