import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useNavbar = () => {
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const overlayHandler = () =>
    setToggleOverlay((currentValue) => !currentValue);
  //close overlay when route changes
  const router = useRouter();
  useEffect(() => {
    setToggleOverlay(false);
  }, [router.query]);

  return {
    toggleOverlay,
    overlayHandler,
  };
};

export default useNavbar;
