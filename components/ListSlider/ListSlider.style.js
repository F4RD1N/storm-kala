import styled from "styled-components";

//Global shared
import { GlobalButton } from "../../styles/shared";

export const Container = styled.div``;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fonts.size.listTitle};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const SecTitle = styled.h3`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fonts.size.listSecTitle};
  margin-bottom: 2rem;
`;

export const LoadMoreContainer = styled.div`
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadMoreButton = styled(GlobalButton)`
  border-radius: 50%;
  font-size: 1.3rem;
`;
