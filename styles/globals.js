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
    background-color: ${(props) => props.theme.colors.natural}
  }

  /* Swiper Styles */
  .swiper-item {
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: none;
  overflow: hidden;
  transition: all ${(props) => props.theme.utilities.transition};
  &:hover {
    box-shadow: ${(props) => props.theme.utilities.shadow.card};
  }
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
    color: initial
  }
  li{
    list-style: none;
  }

  input {
    font-family: ${(props) => props.theme.fonts.main};
  }

  section {
    margin-bottom: 3rem;
  }

  p{
    line-height: 1.6;
  }


  /* custom scrollbar */
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.textSecondary};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: ${props => props.theme.colors.red}
}

`;

export default GlobalStyles;
