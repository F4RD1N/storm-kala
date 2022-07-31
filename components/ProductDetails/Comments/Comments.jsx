import React from "react";

//Styled Components
import {
  Container,
  Titlebar,
  Title,
  Suggestion,
  IconContainer,
  LoadMore,
  EndOfList,
} from "./Comments.style";

//Icons
import { AiFillLike } from "react-icons/ai";

//Components
import CommentCard from "./CommentCard";

//state
import { useProductState } from "../../../hooks";

//logic
import { useLoadMore } from "../../../hooks";

//helpers
import { englishToPersian } from "../../../helpers";

const Comments = ({ pusher }) => {
  const { comments, suggestion } = useProductState();
  const { loading, end, handler } = useLoadMore(pusher);
  return (
    <Container>
      <Titlebar>
        <Title>دیدگاه ها</Title>
        <Suggestion>
          <IconContainer>
            <AiFillLike />
          </IconContainer>{" "}
          {englishToPersian(suggestion?.percentage) + "%"}
        </Suggestion>
      </Titlebar>

      {comments?.map((item) => {
        const { id, user_name, body, created_at, is_buyer, rate } = item;
        return (
          <CommentCard
            key={id}
            name={user_name}
            body={body}
            time={created_at}
            isBuyer={is_buyer}
            rate={rate}
          />
        );
      })}
      {!end ? (
        <LoadMore disabled={loading} onClick={handler}>
          {loading ? "کمی صبر کنید ..." : "بیشتر"}
        </LoadMore>
      ) : (
        <EndOfList>به انتهای لیست رسیدید!</EndOfList>
      )}
    </Container>
  );
};

export default Comments;
