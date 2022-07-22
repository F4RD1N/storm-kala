import styled from "styled-components";

export const Container = styled.div`
  border-left: 1px solid ${(props) => props.theme.colors.border};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  transition: all ${(props) => props.theme.utilities.transition};

  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(7),
  &:nth-child(8) {
    border-bottom: none;
  }
  &:last-child {
    border-left: none;
  }
  &:nth-child(4) {
    border-left: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.red};
    color: #fff;
  }
`;
export const ImageContainer = styled.div``;

export const Title = styled.h2`
  text-align: center;
  font-size: 0.8rem;
`;
