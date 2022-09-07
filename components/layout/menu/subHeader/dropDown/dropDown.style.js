import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
`;
export const Title = styled.h4`
  font-size: 1rem;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textPrimary};
`;
export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 0 1rem;
  display: ${props => props.isVisible ? 'block' : 'none'};
  position: absolute; 
  background-color: ${props => props.theme.colors.card};
  column-count: 3;
  transform: translateY(130px) translateX(-80px);
  padding: .5rem;
  border-radius: 5px;
  z-index: 2;
  box-shadow: ${props => props.theme.utilities.shadow.button};
`;
export const Item = styled.h4`
  border-radius: 5px;
  padding: 1rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
  }
`;
