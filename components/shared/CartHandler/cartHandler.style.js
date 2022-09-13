import styled from "styled-components";

export const HandleButtonsContainer = styled.div`
  color: ${props => props.theme.colors.textPrimary};
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.col};
  justify-content: space-between;
  gap: 0.5rem;
  width: fit-content;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.08);
  padding: 0 1rem;
  width: 130px;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 150px;
  }
`;
export const HandleButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.5rem;
  padding: 0.75rem 0;
  color: ${(props) => props.theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;

export const Quantity = styled.span`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

export const QuantityLimit = styled.span`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;