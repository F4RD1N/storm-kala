import styled from "styled-components";

export const Container = styled.section`
  margin-top: .3rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.2rem;
  margin-bottom: .3rem;

  @media ${(props) => props.theme.breakpoints.xs} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: repeat(6, 1fr);
  }

`