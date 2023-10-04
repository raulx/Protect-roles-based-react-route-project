import { useContext } from "react";
import authContext from "../context/userContext";

export function UserContext() {
  return useContext(authContext);
}
