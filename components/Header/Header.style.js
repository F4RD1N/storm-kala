import styled from "styled-components";

export const Container = styled.header`
    padding: .8rem 0;
    margin-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.border};
`
export const Item = styled.div`
    font-size: 1.3rem;
`

export const MainTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.colors.red};
`