import React from "react";

//Styled Components
import { LoadMoreContainer, LoadMoreButton } from "./ListSlider.style";
//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
//Components
import { LoadingIndicator } from "../shared";

//logic
import { useLoadMore } from "../../hooks";

const LoadMore = ({ pusher, pager }) => {
  const { loading, end, handler } = useLoadMore(pusher, pager);
  return (
    <LoadMoreContainer>
      {!end ? (
        <LoadMoreButton disabled={loading} onClick={handler} pressed={loading}>
          {loading ? <LoadingIndicator /> : <AiOutlineArrowLeft />}
        </LoadMoreButton>
      ) : (
        "محصول دیگری موجود نیست!"
      )}
    </LoadMoreContainer>
  );
};

export default LoadMore;
