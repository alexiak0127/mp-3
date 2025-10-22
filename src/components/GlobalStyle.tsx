import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 10;
        padding-bottom: 64px;
    }

    body {
        font-family: Arial, sans-serif;
        color: #000000;
        background-color: #F7EDE2;
        line-height: 1.5;
    }

`;