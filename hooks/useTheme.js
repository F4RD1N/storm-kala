import { useState, useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
import { setThemeAction } from "../redux/config/configAction";

const useTheme = () => {
  const dispatch = useDispatch();
  //set Theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((currentValue) => currentValue === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    dispatch(setThemeAction(theme));
  }, [theme]);

  return {
    toggleTheme,
  };
};

export default useTheme;
