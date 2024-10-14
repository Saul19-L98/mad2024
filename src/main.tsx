import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/components/pages/home/HomePage.tsx";
import { ErrorPage } from "@/components/pages/error/ErrorPage.tsx";
import { PortfoliosPage } from "./components/pages/portfolio/PortfoliosPage";
import { ContactPage } from "@/components/pages/contact/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <PortfoliosPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact/:contactId",
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
