import axios from "axios";

const initialState = {
  email: null,
  firstName: null,
  lastName: null,
//   loading: false
};

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

export function requestUserData() {
  let data = axios.get("./auth/user-data").then(res => res.data);
  return {
    type: REQUEST_USER_DATA,
    payload: data
  };
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // case REQUEST_USER_DATA + "_PENDING":
    //   return { loading: true };
    // case REQUEST_USER_DATA + "_REJECTED":
    //   return { loading: false };
    case REQUEST_USER_DATA + "_FULFILLED":
      let { email, firstName, lastName } = payload.user;
      return { email, firstName, lastName };
    default:
      return state;
  }
}
