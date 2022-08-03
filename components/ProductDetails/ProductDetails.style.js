import styled from "styled-components";

export const Container = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 430px;
    margin-bottom: .5rem;
  }
`;

export const SecondContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 350px;
    margin-bottom: 3rem;
  }
`;
export const Right = styled.aside`
  border-left: 0.5rem solid ${(props) => props.theme.colors.natural};
`;
export const Left = styled.aside`
    position: relative;
`;
