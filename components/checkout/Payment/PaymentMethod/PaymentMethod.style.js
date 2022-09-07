import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem 1rem .5rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
export const MethodContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const Radio = styled.input``

export const IconContainer = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.blue};
`;
export const MethodTitle = styled.span``;
