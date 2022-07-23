import styled from "styled-components";

//Shared Styles
import { SectionCard } from "../../../styles/shared";

export const Container = styled(SectionCard)`
`;

export const ProductName = styled.h2`
  font-size: 1.3;
  font-weight: bold;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const ColorsContainer = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
export const Color = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.pressed &&
    `
  &:before {
    content: "✔️";
    font-size: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `}
`;
