import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    background-color: rgba(0,0,0, .1);
    inset: 0;
    height: 100vh;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    background-color: ${props => props.theme.colors.red};
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`