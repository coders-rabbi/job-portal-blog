import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Root from "../Layout/Root";
import Jobs from "../components/pages/Jobs/Jobs";
import JobsDetails from "../components/pages/Jobs/JobsDetails";
import UpcomingEvents from "../components/pages/UpcomingEvents/UpcomingEvents";



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
      },
      {
        path: 'jobDetails/:jobId',
        element: <JobsDetails></JobsDetails>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/events',
        element: <UpcomingEvents></UpcomingEvents>
      }
    ]
  },
]);