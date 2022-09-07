import styled from "styled-components";

export const AddressSection = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem 1rem 2rem;
  position: relative;
  margin-bottom: 0.5rem;
`;

export const AddressTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const IconContainer = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.blue};
`;

export const AddressValue = styled.p`
  font-weight: 500;
  margin-top: -10px;
`;

export const ChangeAddress = styled.span`
  color: ${(props) => props.theme.colors.blue};
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 1rem;
  cursor: pointer;
`;