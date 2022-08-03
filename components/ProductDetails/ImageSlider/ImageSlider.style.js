import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
  margin: 0;
  padding: .5rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 100%;
  }
`;

export const Item = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  height: 420px;
`;
