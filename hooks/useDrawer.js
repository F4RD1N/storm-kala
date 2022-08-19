import { useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
import { setDrawerStatus } from "../redux/Slices/mainSlice";

//state
import { useMainState } from "../hooks";
const useDrawer = () => {
  const { drawerStatus } = useMainState();
  const dispatch = useDispatch();
  const drawerHandler = () => dispatch(setDrawerStatus());
  //prevent background scroll when drawer is open!
  useEffect(() => {
    if (drawerStatus) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [drawerStatus]);

  //close the drawer when clicked on background
  const closeHandler = (event) => {
    if (event.target.classList.contains("drawer")) {
      dispatch(setDrawerStatus());
    }
  };

  return {
    drawerStatus,
    closeHandler,
    drawerHandler,
  };
};

export default useDrawer;
