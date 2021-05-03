import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-size: 24px;
        outline: none;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
    }

    a {
        text-decoration: none;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    a:active {
        color: inherit;
    }

    ol, ul {
        list-style: none;
    }

    body {
        &::-webkit-scrollbar { 
            width: 10px;
        }
    
        &::-webkit-scrollbar-track-piece { 
            background-color: gray;
        }
    
        &::-webkit-scrollbar-thumb { 
            background-color: #006B53;
            border-radius: 15px;
            height: 100px;
        }
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    textarea {
        &::-webkit-scrollbar { 
            width: 0; 
        }
    }

    time {
        font-size: inherit;
    }
`