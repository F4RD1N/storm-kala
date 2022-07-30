import styled from "styled-components";

const LoadMoreButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.utilities.radius.button};
  box-shadow: ${(props) => props.theme.utilities.shadow.button};
  transition: filter 100ms linear;
  cursor: pointer;
  &:hover {
    filter: saturate(4);
  }
  &:active {
    filter: saturate(8);
  }
`;

export default LoadMoreButton;
