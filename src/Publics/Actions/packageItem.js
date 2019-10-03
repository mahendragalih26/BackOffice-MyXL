import Axios from "axios";

export const addPackageItem = data => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_PACKAGE_ITEMS",
    payload: Axios.post(`${process.env.REACT_APP_HOST}/api/packageitems/`, data)
  };
};

export const getPackageItem = () => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_PACKAGE_ITEMS",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/api/packageitems/`)
  };
};

export const getPackageItemId = id => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_PACKAGE_ITEMSID",
    payload: Axios.patch(`${process.env.REACT_APP_HOST}/api/packageitems/${id}`)
  };
};
