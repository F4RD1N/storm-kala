import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
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

export const ReviewsCount = styled.span`
  color: ${(props) => props.theme.colors.blue};
  font-size: 0.8rem;
`;

export const ReviewContainer = styled.div`
  margin: 0 1rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.natural};
  padding: 0.5rem 0;

  margin-bottom: 2rem;
`;
export const ReviewTitlebar = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewTitle = styled.h3`
  font-weight: bold;
`;
export const ReviewTime = styled.h3`
  color: ${(props) => props.theme.colors.textSecondary};
`;
export const ReviewBody = styled.p`
  font-weight: 300;
`;
