import React from "react";
import Link from "next/link";

//Styled Components
import { LinkItem } from "./UsefulLinks.style";

const UsefulLinkItem = ({ url, title }) => {
  return (
    <Link href={url}>
      <LinkItem>{title}</LinkItem>
    </Link>
  );
};

export default UsefulLinkItem;
