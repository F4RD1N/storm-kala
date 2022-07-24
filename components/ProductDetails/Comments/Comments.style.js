import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)``;

export const Titlebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-weight: bold;
`;

export const CommentsCount = styled.span`
  color: ${(props) => props.theme.colors.blue};
  font-size: 0.8rem;
`;

export const CommentContainer = styled.div`
  margin: 0 1rem 2rem 1rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.natural};
  padding: 0.5rem 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => props.showFull ? 'N' : 3}; /* number of lines to show */ 
`;
export const CommentTitlebar = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentTitle = styled.h3`
  font-weight: bold;
`;
export const CommentTime = styled.h3`
  color: ${(props) => props.theme.colors.textSecondary};
`;
export const CommentBody = styled.p`
  font-weight: 300;
`;
