import styled from "styled-components";

//Shared Styled
import {SectionCard, GlobalButton} from '../../../styles/shared'
export const Container = styled(SectionCard)`
    position: fixed;
    bottom: 0;
    width: 100%;
    right: 0;
    left: 0;
    z-index: 5;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AddButton = styled(GlobalButton)`
    font-size: 1rem;
    padding: .8rem 2rem;
`

export const ProductPrice = styled.span`
    font-size: 1rem;
    font-weight: bold;
`