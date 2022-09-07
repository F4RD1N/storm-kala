import React from "react";
import propTypes from 'prop-types'

//Styled Components
import {
  CommentContainer,
  CommentTitleContianer,
  CommentTitlebar,
  CommentTitle,
  CommentTime,
  CommentBody,
  IsBuyer,
  Rate,
} from "./Comments.style";

//helpers
import { englishToPersian } from "../../../helpers";

const CommentCard = ({ name, body, time, isBuyer, rate }) => {
  return (
    <CommentContainer showFull={false}>
      <CommentTitlebar>
        <CommentTitleContianer>
          <Rate value={rate}>{englishToPersian(rate)}</Rate>
          <CommentTitle>{name}</CommentTitle>
          {isBuyer ? <IsBuyer> (خریدار)</IsBuyer> : ""}
        </CommentTitleContianer>
        <CommentTime>{time}</CommentTime>
      </CommentTitlebar>
      <CommentBody>{body}</CommentBody>
    </CommentContainer>
  );
};

//props types
CommentCard.propTypes = {
  name: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  isBuyer: propTypes.bool.isRequired,
  rate: propTypes.number.isRequired,
};
export default CommentCard;
