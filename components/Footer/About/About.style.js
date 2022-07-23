import styled from "styled-components";

export const Container = styled.section``

export const Title = styled.h2`
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
`

export const Description = styled.p`
    color: ${props => props.theme.colors.textSecondary};
    text-align: center;
    font-size: .9rem;
`