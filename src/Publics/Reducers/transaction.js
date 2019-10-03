const initialState = {
  transactionList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const myTransaction = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_TRANSACTIONS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_TRANSACTIONS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        transactionList: action.payload.data.response
      };
    default:
      return state;
  }
};

export default myTransaction;
