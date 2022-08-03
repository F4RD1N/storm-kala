import styled from "styled-components";

const SectionCard = styled.section`
  user-select: none;
  margin-bottom: 0.5rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.card};
  font-size: .9rem;
  padding: 1rem;
`;

export default SectionCard