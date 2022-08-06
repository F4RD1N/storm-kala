import { useSelector } from "react-redux";

const useConfigState = () => {
  const { theme, drawerStatus } = useSelector((state) => state.configState);

  return {
    theme,
    drawerStatus,
  };
};

export default useConfigState;
