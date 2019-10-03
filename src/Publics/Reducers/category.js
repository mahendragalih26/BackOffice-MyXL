const initialState = {
  categoryList: [],
  subCategoryList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const myCategory = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORYS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_CATEGORYS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CATEGORYS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        categoryList: action.payload.data.response
      };
    case "GET_SUBCATEGORYS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_SUBCATEGORYS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_SUBCATEGORYS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        subCategoryList: action.payload.data.response
      };
    default:
      return state;
  }
};

export default myCategory;
