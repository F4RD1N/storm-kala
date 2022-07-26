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
    font-size: 13px;

    @media ${(props) => props.theme.breakpoints["2xs"]} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 16px;
  }

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.textPrimary};
    background-color: ${(props) => props.theme.colors.natural};
    position: relative;
    
  }

  /* Swiper Styles */
  .swiper-item.border {
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: none;
  background-color: transparent;
  }

  .swiper-item.border:last-child {
    border-left: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 5px 0 0 5px;
  }
  .swiper-item.border:first-child {
    border-right: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 0 5px 5px 0;
  }

  .swiper-item:last-child {
    border-radius: 5px 0 0 5px;
  }
  .swiper-item:first-child {
    border-radius: 0 5px 5px 0;
  }
  .swiper-item{
  background-color: ${(props) => props.theme.colors.card};
  overflow: hidden;
  transition: all ${(props) => props.theme.utilities.transition};
  
  &:hover {
    box-shadow: ${(props) => props.theme.utilities.shadow.card};
  }
  &:active {
    transform: translateY(-3px);
  }
  }
  
  
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.main};
    color: ${props => props.theme.colors.textPrimary};
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
  background: ${(props) => props.theme.colors.textSecondary};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: ${(props) => props.theme.colors.red}
}



//remove blue overlay on links
/*IE9*/

*
{        
    /* -webkit-user-select: none; */
    /* -moz-user-select: -moz-none; */
    /*IE10*/
    /* -ms-user-select: none; */
    /* user-select: none; */

    /*You just need this if you are only concerned with android and not desktop browsers.*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}    
input[type="text"], textarea, [contenteditable]
{

    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
}


`;

export default GlobalStyles;
