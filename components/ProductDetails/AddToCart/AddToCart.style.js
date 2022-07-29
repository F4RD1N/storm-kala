import styled from "styled-components";

//Shared Styled
import { SectionCard, GlobalButton } from "../../../styles/shared";
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

export const AddButton = styled(GlobalButton)`
  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  min-width: 180px;
  ${(props) =>
    props.outStock &&
    `
    background-color: gray;
  `}
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const OldPrice = styled.h4`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.textSecondary};
  align-self: flex-end;
`;

export const GoToSimilarSection = styled.a`
  color: ${(props) => props.theme.colors.blue};
  font-weight: initial;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const HandleButtonsContainer = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  width: fit-content;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
  padding: 0 1rem;
  width: 140px;
`;
export const HandleButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.5rem;
  padding: 0.75rem 0;
  color: ${(props) => props.theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;

export const Quantity = styled.span`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

export const QuantityLimit = styled.span`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;
