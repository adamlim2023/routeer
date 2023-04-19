export const authenticate = (data) => (dispatch) => {
  console.log(data, "data");
  dispatch({ type: "LOGIN", payload: data });
};
