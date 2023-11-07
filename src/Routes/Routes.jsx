import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddJob from "../pages/Jobs/AddJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



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
        element: <AddJob></AddJob>
      }
    ]
    },
  ]);

  export default router;