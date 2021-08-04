import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('/assets/font/Pretendard-Regular.woff') format('woff');
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    body {
        font-family: 'Pretendard-Regular';
    }
`

export default GlobalStyle
