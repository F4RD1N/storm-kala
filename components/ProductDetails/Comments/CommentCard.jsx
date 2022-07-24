import React from "react";

//Styled Components
import {
  CommentContainer,
  CommentTitlebar,
  CommentTitle,
  CommentTime,
  CommentBody,
} from "./Comments.style";

const CommentCard = ({ name, body, time }) => {
  return (
    <CommentContainer showFull={false}>
      <CommentTitlebar>
        <CommentTitle>{name}</CommentTitle>
        <CommentTime>{time}</CommentTime>
      </CommentTitlebar>
      <CommentBody>{body}</CommentBody>
    </CommentContainer>
  );
};

export default CommentCard;
