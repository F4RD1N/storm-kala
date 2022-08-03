import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  background-color: #fff;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.lg} {
   margin-top: 3rem;
  }

`;
