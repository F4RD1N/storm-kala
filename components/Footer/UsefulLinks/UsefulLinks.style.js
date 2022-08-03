import styled from "styled-components";

export const Container = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`
export const LinksTitle = styled.h2`
    font-weight: bold;
    margin-bottom: 1.5rem;
`
export const LinkItem = styled.a`
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: .8rem;
    font-size: .9rem;
    cursor: pointer;
    width: fit-content;
`