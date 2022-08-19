import { useSelector } from "react-redux";

const useMainState = () => {
  const { theme, drawerStatus } = useSelector((state) => state.mainState);

  return {
    theme,
    drawerStatus,
  };
};

export default useMainState;
