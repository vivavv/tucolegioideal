import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { App } from "./App";
import { Students } from "./pages/Students";
import { Users } from "./pages/Users";
import { Settings } from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "students",
    element: (
      <App>
        <Students />
      </App>
    ),
  },
  {
    path: "users",
    element: (
      <App>
        <Users />{" "}
      </App>
    ),
  },
  {
    path: "settings",
    element: (
      <App>
        <Settings />
      </App>
    ),
  },
]);
