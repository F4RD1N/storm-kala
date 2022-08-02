import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 30;
  transform: translateX(${(props) => (props.active ? "0%" : "100%")});
`;

export const Drawer = styled.div`
  position: relative;
  height: 100%;
  width: 65%;
  padding: 1rem;
  background-color: #fff;
  transform: translateX(${(props) => (props.active ? "0%" : "100%")});
  transition: transform 100ms linear;
  overflow-y: scroll;
`;


export const CloseDrawer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const MainTitle = styled.h1`
  font-size: 1.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.red};
  margin: 3rem 0 1rem 0;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray};
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.textPrimary};
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  &::placeholder {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 0.8rem;
  }
`;
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => props.theme.colors.textPrimary};
    `

export const HorizontalRuler = styled.hr`
  border: none;
  outline: none;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  margin: 1.5rem 0;
`;

export const Title = styled.h3`
  margin-bottom: 2rem;
  font-weight: 500;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  font-size: 1.5rem;
  margin-bottom: .5rem;
  width: 90%;
  padding: .7rem .5rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.gray};
  }
`
export const ItemTitle = styled.h4`
font-size: 1rem;
`