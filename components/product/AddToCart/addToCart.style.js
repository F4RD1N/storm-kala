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
  margin: .5rem 0;
  flex-direction: column-reverse;
  gap: 0.5rem 0;
  padding-top: 0.5rem;

  @media ${(props) => props.theme.breakpoints["2xs"]} {
    flex-direction: row;
    gap: 0;
    padding-top: 1rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0;
    height: 20%;
    box-shadow: none;
    margin: 0;
    flex-direction: row-reverse;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const AddButton = styled(GlobalButton)`
  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  width: 130px;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 150px;
  }
  ${(props) =>
    props.outStock &&
    `
    background-color: gray;
  `}
  &:hover {
    background-color: ${props => props.outStock && 'gray'};
  }
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

