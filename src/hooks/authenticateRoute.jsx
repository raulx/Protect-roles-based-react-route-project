/* eslint-disable react/prop-types */
import { Navigate, useLocation, Outlet } from "react-router-dom";

export function ProtectedRoute({ allowedRoles }) {
  const location = useLocation();
  const userLoggedIn = JSON.parse(localStorage.getItem("pr"));
  const isRoles = userLoggedIn?.roles?.find((r) => {
    return allowedRoles.includes(r);
  });

  return userLoggedIn && isRoles ? (
    <Outlet />
  ) : userLoggedIn ? (
    <Navigate
      to={"/unauthorized"}
      state={{
        from: location,
        message: "You are unauthorized to access this page",
      }}
      replace
    />
  ) : (
    <Navigate
      to={"/login"}
      state={{
        from: location,
        message: "You need to login First to access this page",
      }}
      replace
    />
  );

  // return userLoggedIn ? (
  //   <Outlet />
  // ) : (
  //   <Navigate
  //     to={"/login"}
  //     state={{
  //       from: location,
  //       message: "You need to login First to access this page",
  //     }}
  //     replace
  //   />
  // );
}
