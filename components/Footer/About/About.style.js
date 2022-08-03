import styled from "styled-components";

export const Container = styled.section``;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.5;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  font-size: 0.9rem;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 60%;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 40%;
  }
`;
