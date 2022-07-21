import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1{}
  html {
    /* font-size: 62.5%; */
    scroll-behavior: smooth;
    direction: rtl;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
  }
  h1,h2,h3,h4,h5,h6,button {
    /* font-family: ${props => props.theme.fonts.title}; */
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;