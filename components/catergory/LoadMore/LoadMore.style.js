import styled from "styled-components";
//shared
import { GlobalButton } from "../../../styles/shared";

export const Container = styled(GlobalButton)`
  width: 100%;
  margin: .5rem 0 3rem;
  background-color: ${(props) => props.pressed ? props.theme.colors.primary : props.theme.colors.card};
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  height: 60px;
  transition: all ${props => props.theme.utilities.transition};
  box-shadow: none;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

