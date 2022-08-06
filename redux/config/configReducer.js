const initialState = {
  theme: "light",
  drawerStatus: false,
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_DRAWER_STATUS":
      return {
        ...state,
        drawerStatus: !state.drawerStatus,
      };
    default:
      return state;
  }
};

export default configReducer;
