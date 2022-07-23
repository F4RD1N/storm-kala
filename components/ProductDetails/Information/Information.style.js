import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const ItemContainer = styled.div`
   column-count: 2;
   margin-bottom: 1rem;
   border-bottom: 1px solid ${props => props.theme.colors.natural};
`
export const Item = styled.li`
  font-size: 0.9rem;
  margin: 0 0.5rem 1rem 0;
  display: flex;
  gap: .5rem;
  font-weight: 300;
`;
export const ItemValue = styled.h3`
`
