import React, { useState } from "react";
import useSWR from "swr";

//Styled Components
import { LoadMoreContainer, LoadMoreButton } from "./ListSlider.style";
//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
//Components
import { LoadingIndicator } from "../shared";

//redux
import { useDispatch } from "react-redux";

const LoadMore = ({ pusher }) => {
  const [page, setPage] = useState(2)
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);
  const dispatch = useDispatch();

  const handler = () => {
    setLoading(true);
    const fetcher = async () => {
      const response = await fetch(pusher.endpoint(page));
      const data = await response.json();
      if (!pusher.dataPath(data).length) setEnd(true);
      return pusher.dataPath(data);
    };
    fetcher().then((res) => {
      dispatch(pusher.action(res));
      setLoading(false);
      setPage((current) => current + 1);
    });
  };
  return (
    <LoadMoreContainer>
     {
      !end ? <LoadMoreButton disabled={loading} onClick={handler} pressed={loading}>
      {loading ? <LoadingIndicator /> : <AiOutlineArrowLeft />}
    </LoadMoreButton>: 'محصول دیگری موجود نیست!'
     }
    </LoadMoreContainer>
  );
};

export default LoadMore;
