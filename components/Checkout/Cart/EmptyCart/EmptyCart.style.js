import styled from "styled-components";

export const Container = styled.div`

`
export const Empty = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.div`
  font-size: 2rem;
  display: flex;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const GoBackToTheShop = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.blue};
`;
