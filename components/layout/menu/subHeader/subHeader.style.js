import styled from "styled-components";

export const Container = styled.nav`
  padding: .5rem 0;
  background-color: ${(props) => props.theme.colors.graylower};
  width: 90%;
  margin: 0 auto;
  border-radius: 0 0 5px 5px;
  margin-bottom: 3rem;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.div``;
