import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "../pages/home";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/services",
    Component: () => <div>Services Page</div>,
  },
]);
const AppRouterProvider = () => <RouterProvider router={router} />;

export default AppRouterProvider;
