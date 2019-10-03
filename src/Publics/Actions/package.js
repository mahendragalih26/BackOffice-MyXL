import Axios from "axios";

export const getPackage = () => {
  return {
    type: "GET_PACKAGES",
    payload: Axios.get(`${process.env.REACT_APP_HOST}/api/packages/`)
  };
};

export const addPackage = data => {
  return {
    type: "ADD_PACKAGES",
    payload: Axios.post(`${process.env.REACT_APP_HOST}/api/packages/`, data)
  };
};

export const deletePackage = id => {
  return {
    type: "DELETE_PACKAGES",
    payload: Axios.delete(`${process.env.REACT_APP_HOST}/api/packages/id/${id}`)
  };
};
