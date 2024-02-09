import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data.users });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', error: error.message });
  }
};

export const createUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/users', userData);
    dispatch({ type: 'CREATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_USER_FAILURE', error: error.message });
  }
};