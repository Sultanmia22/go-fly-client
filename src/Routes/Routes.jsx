import { createBrowserRouter } from "react-router";
import MainLayoutes from "../Layouts/MainLayouts/MainLayoutes";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import SendParcel from "../Pages/SendPercel/SendParcel";
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
      },

      {
        path: '/send-parcel',
        element: <SendParcel/>
      }
    ]
  },
]);
export default router