import Axios from "axios";

export const getCategory = () => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_CATEGORYS",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/api/category/`)
  };
};

export const getSubCategory = id => {
  console.log(process.env.REACT_APP_HOST);
  return {
    type: "GET_SUBCATEGORYS",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/api/category/sub/${id}`)
  };
};
