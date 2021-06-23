import {useState, useEffect} from 'react'
import {useMediaQuery} from '@material-ui/core'

const Hooks = () => {
  return {
    isMobile: useMediaQuery('(max-width:860px)'),
  }
}

export default {
  Hooks,
}
