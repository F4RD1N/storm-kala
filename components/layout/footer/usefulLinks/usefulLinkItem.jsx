import React from "react";
import Link from "next/link";
import propTypes from 'prop-types'

//Styled Components
import { LinkItem } from "./usefulLinks.style";

const UsefulLinkItem = ({ url, title }) => {
  return (
    <Link href={url}>
      <LinkItem>{title}</LinkItem>
    </Link>
  );
};

//props types
UsefulLinkItem.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
export default UsefulLinkItem;
