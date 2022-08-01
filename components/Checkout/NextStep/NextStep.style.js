import styled from "styled-components";
export const Container = styled.section`
    background-color: ${props => props.theme.colors.card};
    padding: 1rem;
   margin-bottom: .3rem;
`
export const MainTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.colors.red};
    margin: 0 auto 2rem auto;
    width: fit-content;
    cursor: pointer;
`

export const ItemsContainer = styled.div`
 display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    font-size: ${props => props.isMain ? '1.2rem' : '0.9rem'};
    font-weight: ${props => props.isMain ? 'bold' : ''};
    color: ${props => props.isMain ? props.theme.colors.blue : props.theme.colors.textSecondary};
`
export const ItemTitle = styled.h3`

`
export const IconContainer = styled.div`
`