import { useState } from "react";
import axios from "axios";

//redux
import { useDispatch } from "react-redux";

const useLoadMore = (pusher) => {
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);
  const dispatch = useDispatch();

  const handler = () => {
    setLoading(true);

    const fetcher = async () => {
      const response = await axios(pusher.endpoint(page));
      if (!pusher.dataPath(response).length) setEnd(true);
      return pusher.dataPath(response);
    };
    fetcher()
      .then((res) => {
        dispatch(pusher.action(res));
        setLoading(false);
        setPage((currentValue) => currentValue + 1);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return {
    loading,
    end,
    handler,
  };
};

export default useLoadMore;
