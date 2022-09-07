import React from "react";

//Styled Components
import { Container, LinksContainer, LinksTitle } from "./usefulLinks.style";

//Components
import UsefulLinkItem from "./UsefulLinkItem";

//constants
import { usefulLinks } from "../../../../constants";

const UsefulLinks = () => {
  return (
    <Container>
      {usefulLinks.map((item) => {
        const { id, title, sub } = item;
        return (
          <LinksContainer key={id}>
            <LinksTitle>{title}</LinksTitle>
            {sub.map((subItem) => {
              const { id, title, code } = subItem;
              return (
                <UsefulLinkItem
                  key={id}
                  title={title}
                  url={`/category/${code}`}
                />
              );
            })}
          </LinksContainer>
        );
      })}
      <LinksContainer>
        <LinksTitle>شبکه های اجتماعی</LinksTitle>
        <UsefulLinkItem title='Telegram' url='https://t.me/HiddenID' />
        <UsefulLinkItem title='Instagram' url='https://instagram.com/react.nick' />
        <UsefulLinkItem title='Github' url='https://github.com/F4RD1N' />
      </LinksContainer>
    </Container>
  );
};

export default UsefulLinks;
