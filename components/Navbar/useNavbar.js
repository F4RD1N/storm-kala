import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useNavbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const searchHandler = () =>
    setToggleSearch((currentValue) => !currentValue);
  //close overlay when route changes
  const router = useRouter();
  useEffect(() => {
    setToggleSearch(false);
  }, [router.query]);

  return {
    toggleSearch,
    searchHandler,
  };
};

export default useNavbar;
