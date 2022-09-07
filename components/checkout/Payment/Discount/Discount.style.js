import styled from "styled-components";

//Global Styled
import { GlobalButton } from "../../../../styles/shared";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  margin-bottom: 0.5rem;
  height: ${(props) => (props.toggle ? "120px" : "50px")};
`;
export const Titlebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
export const Title = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
`;

export const AddCode = styled.span`
  color: ${(props) => props.theme.colors.blue};
  font-size: 0.9rem;
  cursor: pointer;
`;

export const CodeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CodeInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.gray};
  width: 60%;
  border-radius: 5px;
  height: 40px;
  color: ${(props) => props.theme.colors.graylower};

  &::placeholder {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.graylower};
  }
`;

export const AddButton = styled(GlobalButton)`
  background-color: ${(props) => props.theme.colors.red};
  padding: 0.5rem;
  height: 40px;
`;

export const CodeAlreadyUsed = styled.span`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveCode = styled.span`
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
`;
