import React from "react";

//Styled Components
import {
  CommentContainer,
  CommentTitlebar,
  CommentTitle,
  CommentTime,
  CommentBody,
  IsBuyer,
  Rate
} from "./Comments.style";

//helpers
import { englishToPersian } from "../../../helpers";

const CommentCard = ({ name, body, time, isBuyer, rate }) => {
  return (
    <CommentContainer showFull={false}>
      <CommentTitlebar>
        <CommentTitle><Rate value={rate}>{englishToPersian(rate)}</Rate> {name}{isBuyer ? <IsBuyer> (خریدار)</IsBuyer> : ''}</CommentTitle>
        <CommentTime>{time}</CommentTime>
      </CommentTitlebar>
      <CommentBody>{body}</CommentBody>
    </CommentContainer>
  );
};

export default CommentCard;
