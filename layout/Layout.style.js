import styled from "styled-components";

export const Container = styled.div`
  max-width: 95%;
  width: 100%;
  margin: auto;
  z-index: 20;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 85%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 82%;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 79%;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 77%;
  }

  @media ${(props) => props.theme.breakpoints['2xl']} {
    max-width: 75%;
  }
`;
