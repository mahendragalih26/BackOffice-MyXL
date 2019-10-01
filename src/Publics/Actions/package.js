import Axios from "axios";

export const getPackage = () => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_PACKAGES",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/api/packages/`)
  };
};
