import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useInformation = () => {
  //toogle view
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => setToggle((currentValue) => !currentValue);
  const router = useRouter();
  useEffect(() => setToggle(false), [router.query]);
  return {
    toggle,
    toggleHandler,
  };
};

export default useInformation;
