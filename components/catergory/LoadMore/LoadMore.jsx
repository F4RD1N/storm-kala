import React from "react";
import propTypes from 'prop-types'
//Styled Components
import { Container } from "./LoadMore.style";

//logic
import { useLoadMore } from "../../../hooks";

//Components
import { LoadingIndicator } from "../../shared";

const LoadMore = ({ arg }) => {
  const { loading } = arg;
  const { end, handler } = useLoadMore(arg);
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

//props types
LoadMore.propTypes = {
  arg: propTypes.object.isRequired,
};

export default LoadMore;
