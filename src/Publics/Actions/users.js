import Axios from "axios";

export const getUser = () => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_USERS",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/api/user/`)
  };
};

export const getUserID = number => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_USERSID",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/api/user/${number}`)
  };
};
