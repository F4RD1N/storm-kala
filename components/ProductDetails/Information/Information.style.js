import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
  position: relative;
  max-height: ${(props) => (props.showFull ? "" : "320px")};
  padding-bottom: 2rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    max-height: 1500px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 3px;
    }
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const ItemContainer = styled.div`
  column-count: 2;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.natural};
`;
export const Item = styled.li`
  font-size: 0.9rem;
  margin: 0 0.5rem 1rem 0;
  display: flex;
  gap: 0.5rem;
  font-weight: 300;
`;
export const ItemValue = styled.h3`
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* number of lines to show */
`;

export const More = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`;
