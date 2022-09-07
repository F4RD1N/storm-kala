import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    background-color: ${props => props.theme.colors.card};
    inset: 0;
    height: 100vh;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    background-color: ${props => props.theme.colors.primary};
    width: 200px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`