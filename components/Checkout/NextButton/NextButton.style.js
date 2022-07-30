import styled from "styled-components";

//shared styles
import { GlobalButton, SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
  position: sticky;
  bottom: 0;
  z-index: 5;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1rem 0;
`;

export const HandleButton = styled(GlobalButton)`
  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  min-width: 180px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem 0;
`;
export const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const TotalTitle = styled.h4`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.textSecondary};
  align-self: flex-end;
`;
