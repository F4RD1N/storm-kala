import styled from "styled-components";

export const DetailsContainer = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  margin-bottom: 0.5rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0;
    border-bottom: 0.5rem solid ${(props) => props.theme.colors.natural};
    height: 65%;
  }
`;
export const DetailsTitlebar = styled.h3`
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const DetailsTitle = styled.h3`
  font-weight: bold;
`;

export const TotalPrice = styled.h3``;

export const DetailsItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;
export const DetailsItemTitle = styled.h4`
  font-size: 0.9rem;
`;
export const DetailsItemPrice = styled.h3`
  font-size: 0.9rem;
`;
