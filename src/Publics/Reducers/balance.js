const initialState = {
  userBalanceList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const addBalance = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BALANCE_ITEMS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "ADD_BALANCE_ITEMS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "ADD_BALANCE_ITEMS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userBalanceList: action.payload.data.response
      };
    default:
      return state;
  }
};

export default addBalance;
