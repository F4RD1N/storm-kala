import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  background-color: ${props => props.theme.colors.card};
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.lg} {
   margin-top: 3rem;
  }

`;
