import styled from "styled-components";

export const GlobalCard = styled.div`
  border-radius: ${(props) => props.theme.utilities.radius.card};
  overflow: hidden;
`;

export const GlobalButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.utilities.radius.button};
  box-shadow: ${(props) => props.theme.utilities.shadow.button};
  transition: background-color ${(props) => props.theme.utilities.transition};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }
`;

export const ReadMore = styled.span`
  position: absolute;
  bottom: 0;
  padding: 0 0.5rem 1rem 0;
  padding-top: ${(props) => (props.showFull ? "" : "5rem")};
  color: ${(props) => props.theme.colors.blue};
  display: flex;
  cursor: pointer;
  width: 100%;
  gap: 0.2rem;
  transition: gap ${(props) => props.theme.utilities.transition};
  background: ${(props) =>
    props.showFull
      ? ""
      : `linear-gradient(to top, ${props.theme.colors.card} 20%, transparent)`};
  font-size: 1rem;
  &:hover {
    gap: 0.5rem;
  }
`;

export const SectionCard = styled.section`
  user-select: none;
  margin-bottom: 0.5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.card};
  font-size: 0.9rem;
  padding: 1rem;
`;
