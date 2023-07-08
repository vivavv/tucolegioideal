import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";
import { UserProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <div className="flex w-screen h-screen">
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  </React.StrictMode>
);
