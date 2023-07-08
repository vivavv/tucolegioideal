import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { UserProvider } from "./contexts/UserContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <div className="flex w-screen h-screen font-face-montserrat">
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  </React.StrictMode>
);
