import { createContext, useEffect, useReducer } from "react";

// *** GET USER FROM LOCAL STORAGE
// const user = JSON.parse(localStorage.getItem("user"));
const user =
  typeof localStorage !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const INITIAL_STATE = {
  user: user || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

// export const getServerSideProps = async () => {
//   return {
//     props: {
//       INITIAL_STATE,
//     },
//   };
// };

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(state.user));
    // }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
