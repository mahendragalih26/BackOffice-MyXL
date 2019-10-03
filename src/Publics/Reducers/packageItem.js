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
    case "GET_PACKAGE_ITEMS_ID_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PACKAGE_ITEMS_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PACKAGE_ITEMS_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        packagesItemId: action.payload.data.response
      };
    case "ADD_PACKAGE_ITEMS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "ADD_PACKAGE_ITEMS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "ADD_PACKAGE_ITEMS_FULFILLED":
      let myArr = [];
      myArr = state.packagesItemList;
      myArr.push(action.payload.data.response);
      console.log("123345", action.payload.data.response);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        packagesItemId: myArr
      };
    case "DELETE_PACKAGE_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "DELETE_PACKAGE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_PACKAGE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        packagesItemList: action.payload.data.response
      };
    default:
      return state;
  }
};

export default packageItem;
