import styled from "styled-components";
export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70%;
  margin: 0 auto 5rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 50%;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 40%;
  }

  @media ${(props) => props.theme.breakpoints['2xl']} {
    max-width: 30%;
  }
`;

export const ImageContainer = styled.div``;
