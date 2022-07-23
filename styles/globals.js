import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.textPrimary};
  }

  /* Swiper Styles */
  .swiper-item {
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: none;
  }

  .swiper-item:last-child {
    border-left: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 5px 0 0 5px;
  }
  .swiper-item:first-child {
    border-right: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 0 5px 5px 0;
  }
  .swiper-item.no-border{
  border: none;
  background-color: #fff;
  }
  
  
  h1,h2,h3,h4,h5,h6,button {
    /* font-family: ${(props) => props.theme.fonts.title}; */
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;
