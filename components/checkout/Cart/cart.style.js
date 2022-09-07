import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  margin-bottom: 1rem;
`;
export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    column-count: 2;
  }
`;
export const ClearCart = styled.span`
  position: absolute;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.red};
  font-weight: bold;
  bottom: 0;
  left: 0;
  margin: 1rem;
  cursor: pointer;
`;
