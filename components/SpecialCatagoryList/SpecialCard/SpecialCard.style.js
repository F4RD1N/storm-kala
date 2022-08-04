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
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const BuyButton = styled(GlobalButton)`
  align-self: flex-start;
  font-size: 1rem;
  padding: 0.3rem 1.5rem;
  border-radius: ${(props) => props.theme.utilities.radius.button};
`;

export const LeftContainer = styled.div`
  align-self: flex-start;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 0;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
`;
