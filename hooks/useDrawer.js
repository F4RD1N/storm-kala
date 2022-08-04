import { useEffect } from "react";

const useDrawer = (toggleDrawer, setToggleDrawer) => {

  const drawerHandler = () => setToggleDrawer((currentValue) => !currentValue);
  //prevent background scroll when drawer is open!
  useEffect(() => {
    if (toggleDrawer) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [toggleDrawer]);

  //close the drawer when clicked on background
  const closeHandler = (event) => {
    if (event.target.classList.contains("drawer")) {
      drawerHandler();
    }
  };

  return {
    closeHandler,
    drawerHandler,
    toggleDrawer,
  };
};

export default useDrawer;
