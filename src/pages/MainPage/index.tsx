import {useState, useEffect} from 'react'
import {RouteComponentProps, Route, Switch, withRouter} from 'react-router-dom'
import styled from 'styled-components/macro'
import clsx from 'clsx'
import {MuiThemeProvider, makeStyles} from '@material-ui/core'

import mkConst from '../../common/constants'
import theme from '../../theme/marterialTheme'
import {Drawer, Header} from '../../components'

import MainRouter from '../../router/MainRouter'

const useStyles = makeStyles(theme => ({
  content: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 300,
  },
}))

const MainPage = (props: RouteComponentProps) => {
  const classes = useStyles()
  const {isMobile} = mkConst.Hooks()
  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    isMobile ? setVisible(false) : setVisible(true)
  }, [isMobile])

  return (
    <Layout
      className={clsx(classes.content, {
        [classes.contentShift]: isVisible,
      })}
    >
      {!isVisible && <Header onDrawerVisible={setVisible} />}
      <Drawer isVisible={isVisible} />
      <MainRouter />
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${theme.palette.background.paper};
`

export default MainPage
