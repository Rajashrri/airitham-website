import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/appConfig/router.jsx";
import { ReactLenis } from "lenis/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>
);