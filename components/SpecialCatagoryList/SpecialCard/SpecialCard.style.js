import styled from "styled-components";

//Shared Styles
import { GlobalButton } from "../../../styles/shared";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
  align-items: center;
  border-radius: 5px;
  padding: 1rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.h4`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const BuyButton = styled(GlobalButton)`
align-self: flex-end;
padding: .6rem 1.5rem;
border-radius: 20px 5px 20px 20px;
`

export const LeftContainer = styled.div`
    align-self: flex-start;
`;
