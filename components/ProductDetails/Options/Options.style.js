import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
  display: ${(props) => (props.isVisible ? "block" : "none")};

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 50%;
    margin: 0;
    border-bottom: .5rem solid ${props => props.theme.colors.natural};
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;
export const Content = styled.div`
 @media ${(props) => props.theme.breakpoints.lg} {
    column-count: 1;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    column-count: 2;
  }
`
export const Item = styled.li`
  font-size: 0.9rem;
  margin: 0 0.5rem 1rem 0;
  display: flex;
  gap: 0.3rem;
  font-weight: 300;
`;
export const ItemValue = styled.span`
  font-weight: bold;
`;

export const HorizontalRuler = styled.hr`
  border: none;
  outline: none;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 1rem;
`;

export const ContentDescription = styled.p`
  margin: 0 0.5rem 1rem 0;
  font-weight: 300;
  height: 70px;
  overflow: hidden;
`;
