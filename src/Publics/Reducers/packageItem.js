const initialState = {
  packagesItemList: [],
  packagesItemId: [],
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
        packagesItemList: action.payload.data.response
      };
    case "GET_PACKAGE_ITEMSID_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PACKAGE_ITEMSID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PACKAGE_ITEMSID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        packagesItemId: action.payload.data.response
      };
    default:
      return state;
  }
};

export default packageItem;
