import React, { useState, useEffect } from "react";
import axios from "axios";
//Styled Components
import { LoadMoreContainer, LoadMoreButton } from "./ListSlider.style";
//Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
//Components
import { LoadingIndicator } from "../shared";

//redux
import { useDispatch } from "react-redux";

const LoadMore = ({ pusher }) => {
  // const [page, setPage] = useState(2)
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);
  // const dispatch = useDispatch();

  // const handler = () => {
  //   setLoading(true);

  //   const fetcher = async () => {
  //     const response = await axios(pusher.endpoint(page));
  //     if (!pusher.dataPath(response).length) setEnd(true);
  //     return pusher.dataPath(response);
  //   };
  //   fetcher().then((res) => {
  //     dispatch(pusher.action(res));
  //     setLoading(false);
  //     setPage((currentValue) => currentValue + 1);
  //   }).catch(err => {
  //     console.log(err.message)
  //     setLoading(false)
  //   })
  // };

    const handler = () => {
      setLoading(true)
      setTimeout(() => {
        pusher()
        setLoading(false)
      }, 500);
      // if(pusher.length) setLoading(false)
    }

  return (
    <LoadMoreContainer>
     {
      !end ? <LoadMoreButton disabled={loading} onClick={pusher} pressed={false}>
      {loading ? <LoadingIndicator /> : <AiOutlineArrowLeft />}
    </LoadMoreButton>: 'محصول دیگری موجود نیست!'
     }
    </LoadMoreContainer>
  );
};

export default LoadMore;
