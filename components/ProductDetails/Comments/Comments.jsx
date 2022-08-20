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
  EmptyComments
} from "./Comments.style";

//Icons
import { AiFillLike, AiOutlineArrowDown } from "react-icons/ai";

//Components
import CommentCard from "./CommentCard";


//state and logic
import { useProductState, useLoadMore } from "../../../hooks";

//helpers
import { englishToPersian } from "../../../helpers";

const Comments = ({action}) => {
  const { comments, suggestion, id } = useProductState();
  
  const arg = {
    loading: comments?.loading,
    url: `product/${id}/comments/?`,
    pager: comments?.pager,
    action: action,
  };

  const { end, handler } = useLoadMore(arg);


  return (
    <Container>
      <Titlebar>
        <Title>دیدگاه ها</Title>
        <Suggestion>
          <IconContainer value={suggestion?.percentage}>
            <AiFillLike />
          </IconContainer>
          {englishToPersian(suggestion?.percentage) + "%"}
        </Suggestion>
      </Titlebar>

      {
        !comments?.comments?.length && <EmptyComments>دیدگاهی برای این محصول وجود ندارد!</EmptyComments>
      }
      {comments?.comments?.map((item) => {
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

      {comments?.comments?.length > 2 ? (
        !end ? (
          <LoadMore disabled={arg.loading} onClick={handler}>
            {arg.loading ? "کمی صبر کنید ... " : "بیشتر"}
            {!arg.loading && <AiOutlineArrowDown />}
          </LoadMore>
        ) : (
          <EndOfList>به انتهای لیست رسیدید!</EndOfList>
        )
      ) : (
        ""
      )}
    </Container>
  );
};

export default Comments;
