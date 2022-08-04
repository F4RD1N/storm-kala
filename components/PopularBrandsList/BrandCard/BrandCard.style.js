import styled from "styled-components";
export const Container = styled.div`
  padding: 1rem;
  background-color:${props => props.theme.colors.card};
  position: relative;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const ImageContainer = styled.div``;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  height: 30%;
  padding: 1rem;
`;
