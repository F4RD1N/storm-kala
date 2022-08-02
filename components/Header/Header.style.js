import styled from "styled-components";

export const Container = styled.header`
  padding: 1.4rem 1rem;
  background-color: ${(props) => props.theme.colors.card};
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  font-size: 1.9rem;
  cursor: pointer;
  position: relative;
`;

export const MainTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
`;

export const CartCounter = styled.span`
  position: absolute;
  font-size: 0.8rem;
  right: -10px;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.blue};
  color: #fff;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
