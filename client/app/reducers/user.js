import * as C from '../constants/user';

const initialState = {
  userInfo: null,
  id: null,
  token: null,
  isAuthenticating: false,
  isRegistering: false,
  isAuthenticated: false,
  isLoadingInfo: false,
  error: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case C.LOGIN_REQUEST: {
      return {
        ...state,
        isAuthenticating: true
      };
    }
    case C.LOGIN_ACCEPTED: {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        id: action.payload.accountId,
        token: action.payload.accessToken,
        error: null
      };
    }
    case C.LOGIN_REJECTED: {
      return {
        ...state,
        isAuthenticating: false,
        error: action.payload
      };
    }
    // AUTH
    case C.CHECK_AUTH: {
      return {
        ...state,
        isAuthenticating: true
      };
    }
    case C.CHECK_AUTH_OK: {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        id: action.payload.accountId,
        token: action.payload.accessToken,
        error: null
      };
    }
    case C.CHECK_AUTH_KO: {
      return {
        ...state,
        isAuthenticating: false
      };
    }
    // REGISTER
    case C.REGISTER_REQUEST: {
      return {
        ...state,
        isRegistering: true
      };
    }
    case C.REGISTER_ACCEPTED: {
      return {
        ...state,
        isRegistering: false,
        isAuthenticated: true,
        id: action.payload.accountId,
        token: action.payload.accessToken,
        error: null
      };
    }
    case C.REGISTER_REJECTED: {
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      };
    }
    // LOAD INFO
    case C.USER_LOADING: {
      return {
        ...state,
        isLoadingInfo: true
      };
    }
    case C.USER_LOADED_OK: {
      return {
        ...state,
        isLoadingInfo: false,
        userInfo: action.payload
      };
    }
    case C.USER_LOADED_KO: {
      return {
        ...state,
        isLoadingInfo: false,
        error: action.payload
      };
    }
    // LOGOUT
    case C.LOGOUT: {
      return {
        ...state,
        userInfo: null,
        token: null,
        isAuthenticated: false
      };
    }
    default:
      return {...state};
  }
};

export default user;