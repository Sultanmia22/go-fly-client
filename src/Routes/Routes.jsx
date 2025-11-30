import { createBrowserRouter } from "react-router";
import MainLayoutes from "../Layouts/MainLayouts/MainLayoutes";
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes/>,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  },
]);
export default router