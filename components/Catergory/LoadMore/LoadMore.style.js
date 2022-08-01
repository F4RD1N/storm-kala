import styled from "styled-components";
//shared
import { GlobalButton } from "../../../styles/shared";

export const Container = styled(GlobalButton)`
  width: 100%;
  margin: 1rem 0;
  background-color: ${(props) => props.pressed ? props.theme.colors.primary : props.theme.colors.card};
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  height: 60px;
  transition: all 100ms linear;

`;

