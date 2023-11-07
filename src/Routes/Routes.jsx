import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddJob from "../pages/Jobs/AddJob";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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