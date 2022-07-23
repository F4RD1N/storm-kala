import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem .7rem;
  padding-bottom: 1rem;
  user-select: none;
  height: 270px;
`;
export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.h3`
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.5;
  width: 80%;
`;

export const Details = styled.div`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  gap: 0.5rem;
  padding: 0.5rem 0;
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Price = styled.h4`
  font-weight: bold;
  font-size: .9rem;
  margin-top: .5rem;
`;
export const OldPrice = styled.h4`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  margin-top: 0.5rem;
  font-size: .8rem;
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const Badge = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  background-color: ${(props) => props.theme.colors.red};
  align-self: flex-e;
  color: #fff;
  border-radius: 5px;
  width: 45px;
  height: 25px;
  font-size: .9rem;
  justify-content: center;
  align-items: center;
`;
