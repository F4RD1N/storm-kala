import styled from "styled-components";

export const Container = styled.section`
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${(props) => props.theme.fonts.size.listTitle};
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 5px;
  overflow: hidden;
  gap: 3px;

  @media ${(props) => props.theme.breakpoints['2xs']} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    grid-template-columns: repeat(3, 1fr);

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(8, 1fr);
  }

`;
