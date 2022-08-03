import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
@media ${(props) => props.theme.breakpoints.lg} {
  height: 30%;
  margin: 0;
  border-bottom: .5rem solid ${props => props.theme.colors.natural};
}
`;

export const ProductName = styled.h2`
  font-size: 1.3;
  font-weight: bold;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const ColorsContainer = styled.div`
  font-weight: bold;
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: center;
  gap: .6rem;
`;
export const Color = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 2px solid white;
  outline: ${props => props.pressed ? '2px' : '0'} solid ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const CategoryContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: .5rem;
  `
export const Category = styled.span`
  color: ${props => props.theme.colors.blue};
  &:hover {
    text-decoration: underline;
  }
`