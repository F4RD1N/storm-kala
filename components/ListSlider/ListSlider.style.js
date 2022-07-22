import styled from "styled-components";

export const Container = styled.div``;
export const Titlebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fonts.size.listTitle};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const HorizontalRule = styled.hr`
  align-self: center;
  flex: 1;
  border: none;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;
export const SecTitle = styled.h3`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fonts.size.listSecTitle};
  margin-bottom: 1rem;
`;
