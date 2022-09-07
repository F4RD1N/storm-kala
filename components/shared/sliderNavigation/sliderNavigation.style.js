import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.card};
  display: none;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 0 0.5rem;
  padding: 0.2rem;
  border-radius: 5px;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
  }
`;

export const Button = styled.span`
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
    color: ${props => props.theme.colors.secondary};
`;
