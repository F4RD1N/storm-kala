import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  /* background-color: ${(props) => props.theme.colors.natural}; */
  border-top: 3px solid ${(props) => props.theme.colors.natural};
  line-height: 1.5;
`;
