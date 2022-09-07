import styled from "styled-components";

export const InputContainer = styled.div`

  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.textPrimary};
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  min-width: 70%;
  border-radius: 2px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  color: ${(props) => props.theme.colors.graylower};

  &::placeholder {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.graylower};
  }
`;

export const IconContainer = styled.div`
  margin-top: 5px;
  cursor: pointer;
`;
