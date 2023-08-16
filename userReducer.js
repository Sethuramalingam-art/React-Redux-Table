import { USERINFO } from "./Action.type";

const INITIAL_STATE = {
  userinfo: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "userInfo":
      return {
        ...state,
        userinfo: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
