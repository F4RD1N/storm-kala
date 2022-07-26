import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  margin-bottom: 0;
  padding: 1rem 0.5rem;
  background-color: ${(props) => props.theme.colors.natural};
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 10;
`;

export const Result = styled.div`
  margin-top: 2rem;
`;

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

export const RelatedWordsContainer = styled.div`
  margin-top: 2rem;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;
export const RelatedWordsTitle = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
`;
export const RelatedWord = styled.div`
  margin-top: 1rem;
  margin-left: 0.5rem;
  font-size: 0.9rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 10px;
`;
