import styled from "styled-components";

const ReadMore = styled.span`
color: ${props => props.theme.colors.blue};
margin: 0 .5rem;
margin-top: 1rem;
display: flex;
cursor: pointer;
width: fit-content;
gap: .2rem;
transition: gap ${props => props.theme.utilities.transition};
&:hover {
    gap: .5rem;
}
`

export default ReadMore