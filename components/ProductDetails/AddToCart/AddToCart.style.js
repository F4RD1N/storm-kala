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

  ${(props) =>
    props.outStock &&
    `
    background-color: gray;
  `}
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`
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
`;
export const HandleButton = styled.div`
  font-size: 1.5rem;
  padding: .75rem .25rem;
  color: ${props => props.theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Quantity = styled.span`
  font-size: 1rem;
`