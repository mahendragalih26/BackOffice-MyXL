import Axios from "axios";

export const login = data => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "USER_LOGIN",
    payload: Axios.post(`${process.env.REACT_APP_HOST}/api/admin/login`, data)
  };
};

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
