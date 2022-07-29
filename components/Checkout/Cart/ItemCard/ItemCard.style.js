import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.natural};
  gap: 1rem;
`;

export const RightContainer = styled.div`
display: flex;
max-width: 50%;
align-items: center;
gap: 0 1rem;
`

export const ImageContainer = styled.div`
width: 50px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  overflow: hidden;
`;
export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Price = styled.h3`
  font-size: .9rem;
  font-weight: bold;
`