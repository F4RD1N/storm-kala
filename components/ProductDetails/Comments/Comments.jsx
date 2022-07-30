import React from "react";

//Styled Components
import { Container, Titlebar, Title, CommentsCount } from "./Comments.style";

//Components
import CommentCard from "./CommentCard";

//state
import { useProductState } from "../../../hooks";

const Comments = () => {
  const {comments} = useProductState()
  return (
    <Container>
      <Titlebar>
        <Title>دیدگاه ها</Title>
        <CommentsCount>۱۶۷ دیدگاه</CommentsCount>
      </Titlebar>

      {
        comments?.map(item => {
          const {id, user_name, body, created_at} = item
          return(
            <CommentCard key={id} name={user_name} body={body} time={created_at} />
          )
        })
      }
    </Container>
  );
};

export default Comments;
