import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
  max-height: 800px;
  overflow-y: scroll;
`;

export const Titlebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-weight: bold;
`;

export const Suggestion = styled.span`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
export const IconContainer = styled.div`
  color: ${(props) =>
    props.value < 40 ? "orangered" : props.value < 70 ? "orange" : "green"}; ;
`;

export const CommentContainer = styled.div`
  margin: 0 1rem 2rem 1rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.natural};
  padding: 0.5rem 0 0.5rem 0;
`;
export const CommentTitlebar = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CommentTitleContianer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 60%;
`;
export const CommentTitle = styled.h3`
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IsBuyer = styled.span`
  color: ${(props) => props.theme.colors.blue};
`;
export const CommentTime = styled.h3`
  color: ${(props) => props.theme.colors.textSecondary};
  gap: 0.5rem;
`;
export const Rate = styled.span`
  color: #fff;
  background-color: ${(props) =>
    props.value < 3 ? "orangered" : props.value < 4 ? "orange" : "green"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  font-size: 0.8rem;
  width: 35px;
  height: 20px;
  border-radius: 5px;
`;
export const CommentBody = styled.p`
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) =>
    props.showFull ? "N" : 3}; /* number of lines to show */
`;

export const LoadMore = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: block;
  color: ${(props) => props.theme.colors.blue};
  font-size: 1rem;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EndOfList = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
`;
