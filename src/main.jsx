import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
 <AuthProvider>
  <div className="lg:max-w-7xl mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
    </div>
 </AuthProvider>

);
