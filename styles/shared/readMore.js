import styled from "styled-components";

const ReadMore = styled.span`
  position: absolute;
  bottom: 0;
  padding: 0 0.5rem 1rem 0;
  padding-top: ${(props) => (props.showFull ? "" : "5rem")};
  color: ${(props) => props.theme.colors.blue};
  display: flex;
  cursor: pointer;
  width: 100%;
  gap: 0.2rem;
  transition: gap ${(props) => props.theme.utilities.transition};
  background: ${(props) =>
    props.showFull ? "" : `linear-gradient(to top, ${props.theme.colors.card} 20%, transparent)`};
  font-size: 1rem;
  &:hover {
    gap: 0.5rem;
  }
`;

export default ReadMore;
