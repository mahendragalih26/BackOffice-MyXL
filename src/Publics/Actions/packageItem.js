import Axios from "axios";

export const getPackageItem = () => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_PACKAGE_ITEMS",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/api/packageitems/`)
  };
};
