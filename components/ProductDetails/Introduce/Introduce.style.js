import styled from "styled-components";

export const Container = styled.section`
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  margin: 0 0.5rem;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => props.showFull ? 'N' : 3}; /* number of lines to show */
`;
