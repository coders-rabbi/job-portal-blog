import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Root from "../Layout/Root";
import Jobs from "../components/pages/Jobs/Jobs";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
        loader: () => fetch('/data.json')
      }
    ]
  },
]);