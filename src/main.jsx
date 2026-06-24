import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/appConfig/router.jsx";
import { ReactLenis, useLenis } from "lenis/react";

const RouterWrapper = ({ children }) => {
  return (
    <>
      <ReactLenis root />
      {children}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterWrapper>
      <RouterProvider router={router} />
    </RouterWrapper>
  </StrictMode>
);
