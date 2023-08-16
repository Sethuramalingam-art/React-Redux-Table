import { USERINFO } from "./Action.type";

export const toStore = (userData) => {
  return {
    type: USERINFO,
    payload: userData,
  };
};
