import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  transition: all ${(props) => props.theme.utilities.transition};
  cursor: pointer;

  &:hover {
    /* background-color: ${(props) => props.theme.colors.red};
    color: #fff; */
    box-shadow: ${props => props.theme.utilities.shadow.card};
  }
`;
export const ImageContainer = styled.div``;

export const Title = styled.h2`
  text-align: center;
  font-size: 0.8rem;
`;
