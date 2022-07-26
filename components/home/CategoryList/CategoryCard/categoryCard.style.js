import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.card};
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  align-items: center;
  transition: all ${(props) => props.theme.utilities.transition};
  cursor: pointer;

  &:hover {

    box-shadow: ${props => props.theme.utilities.shadow.card};
  }
`;
export const ImageContainer = styled.div`
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 0.9rem;
`;
