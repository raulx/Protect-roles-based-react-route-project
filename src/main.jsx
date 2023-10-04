import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { UserAuthProvider } from "./context/userContext.jsx";

import { router } from "./utils/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
  </React.StrictMode>
);
