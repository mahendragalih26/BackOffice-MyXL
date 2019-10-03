const initialState = {
  usersList: [],
  userId: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_USERS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_USERS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        usersList: action.payload.data.response
      };
    case "GET_USERSID_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_USERSID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_USERSID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        usersId: action.payload.data.response
      };
    default:
      return state;
  }
};

export default users;
