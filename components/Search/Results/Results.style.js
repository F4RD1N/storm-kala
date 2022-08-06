import styled from "styled-components";

//shared
import { GlobalButton } from "../../../styles/shared";

export const ResultsContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.3rem;

  @media ${(props) => props.theme.breakpoints.xs} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const LoadMoreButton = styled(GlobalButton)`
  width: 100%;
  margin: 0.5rem 0;
  background-color: ${(props) =>
    props.pressed ? props.theme.colors.primary : props.theme.colors.card};
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 1rem;
  height: 60px;
  transition: all ${props => props.theme.utilities.transition};
  cursor: pointer;
  box-shadow: none;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const Loading = styled.span`
  font-size: 1rem;
  display: inline-block;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.colors.blue};
  margin: 1rem 0;
`;

export const Error = styled(Loading)`
  color: ${(props) => props.theme.colors.red};
  margin-top: 2rem;
`;

export const BaseStatement = styled.span`
  display: block;
  margin-top: 1rem;
  text-align: center;
`;

export const EndOfList = styled(Loading)``;
