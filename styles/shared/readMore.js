import styled from "styled-components";

const ReadMore = styled.span`
  position: absolute;
  bottom: 10px;
  padding-top: ${props => props.showFull ? '' : '5rem'};
  color: ${(props) => props.theme.colors.blue};
  margin: 0 0.5rem;
  margin-top: 1rem;
  display: flex;
  cursor: pointer;
  width: 100%;
  gap: 0.2rem;
  transition: gap ${(props) => props.theme.utilities.transition};
  background: ${(props) =>
    props.showFull ? "" : "linear-gradient(to top, #fff 20%, transparent)"};
  &:hover {
    gap: 0.5rem;
  }
`;

export default ReadMore;
