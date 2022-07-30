import styled from "styled-components";


export const OrderContainer = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  position: relative;
  padding-bottom: 4rem;
  margin-bottom: 0.3rem;
`;
export const OrderTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const OrderItemCard = styled.div`
  position: relative;
  padding-bottom: 5rem;
  height: 100px;
  width: 100px;
`;

export const OrderItemImageContainer = styled.div``;

export const OrderItemQuantity = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.gray};
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
export const BackToCart = styled.div`
  color: ${(props) => props.theme.colors.blue};
  font-size: 0.9rem;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
`;
