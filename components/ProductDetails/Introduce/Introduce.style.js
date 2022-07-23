import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  margin: 0 0.5rem;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => props.showFull ? 'N' : 3}; /* number of lines to show */
`;
