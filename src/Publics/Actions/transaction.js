import Axios from "axios";

export const getTransaction = () => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_TRANSACTIONS",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/api/transaction/all`)
  };
};
