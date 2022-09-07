import styled from "styled-components";

export const Container = styled.div`
  max-width: 95%;
  width: 100%;
  margin: auto;
  margin-top: 0.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 85%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 82%;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 79%;
    margin-top: 8rem;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 60%;
  }

  @media ${(props) => props.theme.breakpoints["2xl"]} {
    max-width: 50%;
  }
`;

export const Content = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
     display: grid;
     grid-template-columns: 50% 50%;
     grid-template-rows: 240px;
  }
`;

export const Left = styled.div`
  height: 235px;
`
