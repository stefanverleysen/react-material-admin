import React, { createContext, useContext, useReducer } from 'react';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => useContext(UserStateContext);
export const useUserDispatch = () => useContext(UserDispatchContext);

export const loginUser = async (dispatch, loginPayload) => {
  // Implement login logic here, e.g., API call
  try {
    dispatch({ type: 'LOGIN', payload: loginPayload });
    return true;
  } catch (error) {
    console.error('Login error', error);
    return false;
  }
};

export const logoutUser = (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
