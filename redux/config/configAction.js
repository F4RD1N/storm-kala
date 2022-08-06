export const setThemeAction = (value) => {
  return {
    type: "SET_THEME",
    payload: value,
  };
};

export const setDrawerStatus = () => {
  return {
    type: "SET_DRAWER_STATUS",
  };
};
