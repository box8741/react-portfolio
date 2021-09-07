import {createGlobalStyle} from 'styled-components'

import mkConst from './constants'

import pretendardRegularFont from '../assets/fonts/Pretendard-Regular.woff'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url(${pretendardRegularFont}) format('woff')
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        overflow-y: auto;
        padding-top: ${mkConst.titleBarHeight}px;
    }
    html, body, #root {
        display: flex;
        width: 100%;
        height: 100%;
        font-family: 'Pretendard-Regular';
        -webkit-user-select: none;
    }
`

export default GlobalStyle
