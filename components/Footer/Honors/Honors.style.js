import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const Honor = styled.div`
  margin-bottom: 1rem;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  color: ${(props) => props.theme.colors.blue};
  margin-bottom: 1rem;
`;
export const HonorTitle = styled.h3`
  text-align: center;
`;
