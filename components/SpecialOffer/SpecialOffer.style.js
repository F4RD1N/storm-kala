import styled from "styled-components";

//Shared Styles
import { GlobalCard } from "../../styles/shared";

export const Container = styled(GlobalCard)`
  background-color: ${(props) => props.theme.colors.gray};
  padding: 0.5rem;
`;
export const TopTitle = styled(GlobalCard)`
  background-color: ${(props) => props.theme.colors.primary};
  padding: .8rem .5rem;
  text-align: center;
  color: #fff;
`;

export const Item = styled.div`
    width: fit-content;
    margin: 1rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ProductName = styled.h3`
    font-weight: bold;
    font-size: .9rem;
    margin-top: 1rem;
`

export const ProductPriceContainer = styled.div`
    display: flex;
    gap: .5rem;
    font-size: .9rem;

`
export const ProductPrice = styled.h4`
    color: ${props => props.theme.colors.primary};
    margin-top: .5rem;
`
export const OldProductPrice = styled.h4`
    margin-top: .5rem;
    text-decoration: line-through;
    opacity: 50%;
`