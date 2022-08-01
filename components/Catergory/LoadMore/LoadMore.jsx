import React from "react";

//Styled Components
import { Container } from "./LoadMore.style";

//logic
import { useLoadMore } from "../../../hooks";

//Components
import { LoadingIndicator } from "../../shared";

const LoadMore = ({ pusher }) => {
  const { loading, end, handler } = useLoadMore(pusher);
  return (
    <div>
      {!end ? (
        <Container disabled={loading} onClick={handler} pressed={loading}>
          {loading ? <LoadingIndicator /> : "بیشتر"}
        </Container>
      ) : (
        "محصول دیگری موجود نیست!"
      )}
    </div>
  );
};

export default LoadMore;
