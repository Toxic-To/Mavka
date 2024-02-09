const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return { ...state, users: action.payload, loading: false, error: null };
    case 'FETCH_USERS_FAILURE':
      return { ...state, users: [], loading: false, error: action.error };
    case 'CREATE_USER_SUCCESS':
      return { ...state, users: [...state.users, action.payload], loading: false, error: null };
    case 'CREATE_USER_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default userReducer;