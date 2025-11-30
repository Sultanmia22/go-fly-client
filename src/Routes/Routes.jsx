import { createBrowserRouter } from "react-router";
import MainLayoutes from "../Layouts/MainLayouts/MainLayoutes";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes/>,
    children: [
      {
        index: true,
        element: <Home/>
      },

      {
        path:'/coverage',
        element: <Coverage/>,
        loader: () => fetch('/serviceCenter.json')
      }
    ]
  },
]);
export default router