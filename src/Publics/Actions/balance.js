import Axios from "axios";

export const addUserBalance = (number, amount) => {
  return {
    type: "ADD_BALANCE",
    payload: Axios.post(
      `${process.env.REACT_APP_HOST}/api/user/topUp/${number}`,
      { amount: amount }
    )
  };
};
