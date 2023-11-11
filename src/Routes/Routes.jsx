import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddJob from "../pages/Jobs/AddJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/Signup";
import PrivateRoute from "./PrivateRoute";
import MyPostedJobs from "../pages/Jobs/MyPostedJobs";
import UpdateJobs from "../pages/Jobs/UpdateJobs";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [{
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addjob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/mypostedjobs",
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
        loader: () => fetch('https://assignment-11-server-psi-one.vercel.app/jobs')
      },
      {
        path: "/updatejobs/:id",
        element: <PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-psi-one.vercel.app/jobs/${params.id}`)
      }
    ]
    },
  ]);

  export default router;