const initialState = {
  packagesList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const myPackage = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PACKAGES_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PACKAGES_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PACKAGES_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        packagesList: action.payload.data.response
      };
    case "ADD_PACKAGES_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "ADD_PACKAGES_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "ADD_PACKAGES_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        packagesList: action.payload.data.response
      };
    default:
      return state;
  }
};

export default myPackage;
