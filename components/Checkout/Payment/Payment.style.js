import styled from "styled-components";

export const Container = styled.div`
  max-width: 95%;
  width: 100%;
  margin: auto;
  margin-top: .5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 85%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 82%;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 70%;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 60%;
  }

  @media ${(props) => props.theme.breakpoints['2xl']} {
    max-width: 50%;
  }
`;