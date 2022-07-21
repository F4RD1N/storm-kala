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
  background-color: ${(props) => props.theme.colors.gray};
  padding: 0.7rem 1rem;
  width: 80%;
  border-radius: ${(props) => props.theme.utilities.radius};
  font-size: 1.4rem;
  color: rgb(153, 153, 153);
  gap: 0.5rem;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  &::placeholder {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 0.8rem;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  width: 15%;
`;
