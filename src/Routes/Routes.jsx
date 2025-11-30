import { createBrowserRouter } from "react-router";
import MainLayoutes from "../Layouts/MainLayouts/MainLayoutes";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import SendParcel from "../Pages/SendPercel/SendParcel";
import AuthLayout from "../Layouts/AuthLayoute/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
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

  {
    path: '/',
    element: <AuthLayout/>,
    children:[
      {
        path: '/login',
        element: <Login/>
      },

      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
]);
export default router