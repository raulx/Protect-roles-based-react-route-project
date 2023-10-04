import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeContent from "../components/homeContent";
import { ProtectedRoute } from "../hooks/authenticateRoute";
import HomePage from "../pages/homePage";
import { ContactPage } from "../pages/contactPage";
import { AboutPage } from "../pages/aboutPage";
import { LoungePage } from "../pages/loungePage";
import { AdminPage } from "../pages/adminPage";
import { EditorPage } from "../pages/editorPage";
import { NotFound } from "../pages/notFound";
import { UnAuthorized } from "../components/unAuthorized";
import LoginPage from "../pages/LoginPage";
import { Profile } from "../components/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeContent /> },
      {
        path: "/home",
        element: <ProtectedRoute allowedRoles={[504]} />,
        children: [{ path: "/home", element: <HomePage /> }],
      },
      {
        path: "/contact",
        element: <ProtectedRoute allowedRoles={[504]} />,
        children: [{ path: "/contact", element: <ContactPage /> }],
      },
      {
        path: "/about",
        element: <ProtectedRoute allowedRoles={[504]} />,
        children: [{ path: "/about", element: <AboutPage /> }],
      },
      {
        path: "/lounge",
        element: <ProtectedRoute allowedRoles={[201, 303]} />,
        children: [{ path: "/lounge", element: <LoungePage /> }],
      },
      {
        path: "/admin",
        element: <ProtectedRoute allowedRoles={[201]} />,
        children: [{ path: "/admin", element: <AdminPage /> }],
      },
      {
        path: "/editor",
        element: <ProtectedRoute allowedRoles={[303]} />,
        children: [{ path: "/editor", element: <EditorPage /> }],
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/unauthorized",
        element: <UnAuthorized />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },

  {
    path: "*",
    element: <NotFound />,
  },
]);
