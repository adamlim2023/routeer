const initialState = {
  token: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
