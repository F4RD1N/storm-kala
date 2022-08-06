import { useState, useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
import { setThemeAction } from "../redux/config/configAction";

const useTheme = () => {
  const dispatch = useDispatch();
  //set Theme
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      } else return "light";
    }
  });

  const themeHandler = () => {
    setTheme((currentValue) => (currentValue === "light" ? "dark" : "light"));
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
    themeHandler,
    theme,
  };
};

export default useTheme;
