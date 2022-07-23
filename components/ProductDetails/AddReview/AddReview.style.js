import styled from "styled-components";
//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
  display: flex;
  justify-content: space-between;
  margin-bottom: .3rem;
`;

export const Title = styled.h2`
  font-weight: bold;
`;

export const Add = styled.span`
  color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  font-size: 0.8rem;
`;
