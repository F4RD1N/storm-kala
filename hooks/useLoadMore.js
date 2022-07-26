import { useState, useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
const useLoadMore = (arg) => {
  const { pager, type, url, action } = arg;
  const [end, setEnd] = useState(pager?.current_page >= pager?.total_pages);
  const dispatch = useDispatch();
  useEffect(() => {
    setEnd(pager?.current_page >= pager?.total_pages)
  }, [pager]);
  const handler = () => {
    dispatch(
      action({
        url: `${url}page=${pager?.current_page + 1}`,
        type,
      })
    );
    if (pager?.current_page + 1 >= pager?.total_pages) {
      setEnd(true);
    }
  };

  return {
    end,
    handler,
  };
};

export default useLoadMore;
