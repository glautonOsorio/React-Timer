import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Login/Login.page";
import { HomePage } from "../pages/Home/Home.page";

export const AppRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);
