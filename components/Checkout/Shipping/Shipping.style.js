import styled from "styled-components";

export const Container = styled.div`
  max-width: 95%;
  width: 100%;
  margin: auto;
`;

export const AddressSection = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem 1rem 2rem;
  position: relative;
  margin-bottom: 0.3rem;
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

// Order
export const OrderContainer = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  position: relative;
  padding-bottom: 4rem;
  margin-bottom: 0.3rem;
`;
export const OrderTitle = styled(AddressTitle)`
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

// Details

export const DetailsContainer = styled.section`
  background-color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  margin-bottom: .3rem;
`;
export const DetailsTitlebar = styled.h3`
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const DetailsTitle = styled.h3`
  font-weight: bold;
`;

export const TotalPrice = styled.h3`
`

export const DetailsItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  `
export const DetailsItemTitle = styled.h4`
  font-size: .9rem;
`
export const DetailsItemPrice = styled.h3`
  font-size: .9rem;

`

