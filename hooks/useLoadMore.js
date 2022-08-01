import { useState, useEffect } from "react";
import axios from "axios";

//redux
import { useDispatch } from "react-redux";

const useLoadMore = (pusher, pager) => {
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(pager?.current_page >= pager?.total_pages);
  const dispatch = useDispatch();

  useEffect(() => {}, [pager]);
  const handler = () => {
    setLoading(true);

    const fetcher = async () => {
      const response = await axios(pusher.endpoint(pager?.current_page + 1));

      if (pager?.current_page + 1 >= pager?.total_pages) {
        setEnd(true);
      }
      return pusher.dataPath(response);
    };
    fetcher()
      .then((res) => {
        dispatch(pusher.action(res));
        setLoading(false);
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
