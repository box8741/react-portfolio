import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('/assets/font/Pretendard-Regular.woff') format('woff');
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body, #root {
        font-family: 'Pretendard-Regular';
        height: 100%;
    }
`

export default GlobalStyle
