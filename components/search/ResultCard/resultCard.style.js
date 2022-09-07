import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1rem;
  padding-right: 0.5rem;
  height: 100px;
  background-color: ${(props) => props.theme.colors.card};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const CardTitle = styled.div`
  font-size: 0.8rem;
  line-height: 1.5;
  width: 60%;
  height: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* number of lines to show */
`;

export const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;