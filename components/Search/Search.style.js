import styled from "styled-components";
//shared
import { GlobalButton } from "../../styles/shared";
export const Container = styled.section``;

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

export const CardContainer = styled.div`
  padding: 1rem;
  padding-right: 0.5rem;
  height: 100px;
  background-color: ${(props) => props.theme.colors.card};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const CardTitle = styled.div`
  font-size: 0.8rem;
  line-height: 1.5;
  width: 60%;
  height: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* number of lines to show */
`;

export const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RelatedWordsContainer = styled.div`
  margin-top: 2rem;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;
export const RelatedWordsTitle = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
`;
export const RelatedWord = styled.div`
  margin-top: 1rem;
  margin-left: 0.5rem;
  font-size: 0.9rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.textPrimary};
  gap: 0.5rem;
  background-color: #fff;
  padding: 1rem;
  min-width: 70%;
  border-radius: 2px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  &::placeholder {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 0.9rem;
  }
`;

export const IconContainer = styled.div`
  margin-top: 5px;
  cursor: pointer;
`;

export const LoadMoreButton = styled(GlobalButton)`
  width: 100%;
  margin: .5rem 0;
  background-color: ${(props) =>
    props.pressed ? props.theme.colors.primary : props.theme.colors.card};
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 1rem;
  height: 60px;
  transition: all 100ms linear;
  cursor: pointer;
  box-shadow: none;
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
