/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";
export const authContext = createContext();

function UserAuthProvider({ children }) {
  const [auth, setAuth] = useState({ auth: false, userData: {}, roles: [] });

  const authUser = async (id) => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);

    setAuth((prevValue) => {
      return {
        ...prevValue,
        auth: true,
        userData: res.data,
        roles: res.data.roles,
      };
    });
    return res;
  };
  const reset = () => {
    setAuth((prevValue) => {
      return {
        ...prevValue,
        auth: false,
        userData: {},
        roles: [],
      };
    });
  };
  return (
    <authContext.Provider value={{ auth, authUser, reset }}>
      {children}
    </authContext.Provider>
  );
}

export default authContext;
export { UserAuthProvider };
