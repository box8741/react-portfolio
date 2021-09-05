import {createGlobalStyle} from 'styled-components'

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
    html, body, #root {
        font-family: 'Pretendard-Regular';
        height: 100%;
        overflow-y: hidden;
        -webkit-user-select: none;
    }
`

export default GlobalStyle
