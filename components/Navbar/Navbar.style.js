import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Item = styled.div`
  color: #000;
`;


export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  /* background-color: ${(props) => props.theme.colors.gray}; */
  font-size: 1.4rem;
  color: ${props => props.theme.colors.textPrimary};
  gap: 0.5rem;
  background-color: #fff;
  padding: 1rem;
  min-width: 70%;
  border-radius: 2px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  &::placeholder {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 0.9rem;
  }
`;

export const IconContainer = styled.div`
  margin-top: 5px;
`
export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  width: 20%;
`;
