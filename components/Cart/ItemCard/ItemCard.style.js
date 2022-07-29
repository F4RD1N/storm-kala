import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
  padding-bottom: .5rem
  ;
  border-bottom: 2px solid ${props => props.theme.colors.natural};
  gap: 1rem;
`;

export const ImageContainer = styled.div``;

export const Title = styled.h3`
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
