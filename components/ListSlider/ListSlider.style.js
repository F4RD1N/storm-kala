import styled from "styled-components";

//Global shared
import { GlobalButton } from "../../styles/shared";

export const Container = styled.section`
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fonts.size.listTitle};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const SecTitle = styled.h3`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fonts.size.listSecTitle};
  margin-bottom: 1rem;
`;

export const Content = styled.div`
position: relative;

`

export const LoadMoreContainer = styled.div`
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: .8rem;
`;

export const LoadMoreButton = styled(GlobalButton)`
  border-radius: 50%;
  font-size: 1.3rem;
  transition: all 200ms linear;
  
  ${props => props.pressed &&`
    padding: 10rem
  `}
`;
