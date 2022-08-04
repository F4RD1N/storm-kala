import { useSelector } from "react-redux";

const useConfigState = () => {
  const { theme } = useSelector(
    (state) => state.configState
  );

  return {
  theme
  };
};

export default useConfigState;
