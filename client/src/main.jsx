import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./app.jsx";
import "./index.css";

// Define routes
const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <App />,
    },
  ],
  {
    future: {
      v7_startTransition: true, // Enables concurrent rendering for route state updates
      v7_relativeSplatPath: true, // Changes how relative routes resolve in splats (*)
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
