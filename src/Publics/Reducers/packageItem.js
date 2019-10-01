const initialState = {
  packagesList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const packageItem = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PACKAGE_ITEMS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PACKAGE_ITEMS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PACKAGE_ITEMS_FULFILLED":
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

export default packageItem;
