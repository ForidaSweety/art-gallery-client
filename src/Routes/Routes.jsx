import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Allinstructor from "../Pages/Allinstructor/Allinstructor";
import AllClass from "../Pages/AllClass/AllClass";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserCart from "../Pages/Dashboard/UserCart/UserCart";
//import AdminRoutes from "./AdminRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AdminRoutes from "./AdminRoutes";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructor',
                element: <Allinstructor></Allinstructor>
            }
            ,
            {
                path: 'classes',
                element: <AllClass></AllClass>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'registration',
                element:<Registration></Registration>
            }
        ]      
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
        children: [
          {
            path: 'userhome',
            element: <UserHome></UserHome>
          },
          {
            path: 'usercart', 
            element: <UserCart></UserCart>
           },
          {
            path:'payment',
            element: <Payment></Payment>
          },

          // admin routes
          {
            path: 'adminhome',
            element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
          },
          {
            path: 'allusers', 
            element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
          },
          {
            path: 'addclass',
            element: <AdminRoutes><AddClass></AddClass></AdminRoutes>
          },
          {
            path: 'manageclass',
            element: <AdminRoutes><ManageClass></ManageClass></AdminRoutes>
          }
        ]
      }
]);

export default router;