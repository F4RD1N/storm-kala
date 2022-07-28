import { useEffect, useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { fetchSearch, clearSearch } from "../../redux/search/searchAction";


const useResults = (value) => {

    const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      value && dispatch(fetchSearch(value));
    }, 1000);
    return () => {
      dispatch(clearSearch());
      clearTimeout(timeout);
    };
  }, [value]);
  
  //page Handler
  const [page, setPage] = useState(2);
  const pageHandler = () => {
    setPage((currentValue) => currentValue + 1);
    dispatch(fetchSearch(value, page));
  };

    return {
        pageHandler
    }
}


export default useResults