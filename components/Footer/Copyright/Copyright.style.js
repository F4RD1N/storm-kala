import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 1rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.gray};
  font-size: .9rem;
`;