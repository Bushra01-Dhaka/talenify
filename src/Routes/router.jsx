import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import AddJobs from "../Pages/AddJobs/AddJobs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import PrivateRoutes from "./PrivateRoutes";
import MyPostedJobs from "../Pages/MyPostedJob/MyPostedJobs";
import UpdateJobs from "../Pages/UpdatePostedJobs/UpdateJobs";
import JobDetails from "../Pages/JobDetails/JobDetails";
import MyBids from "../Pages/MyBid/MyBids";
import BidRequests from "../Pages/BidRequest/BidRequests";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children: [
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:'/addJobs',
          element: <PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/postedJobs',
          element:<PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
        },
        {
          path:'/updatePostedJobs/:id',
          element:<PrivateRoutes><UpdateJobs></UpdateJobs></PrivateRoutes>,
          loader: ({params}) => fetch(`https://talenify-server.vercel.app/jobs/single/${params.id}`)
        },
        {
          path:'/jobDetails/:id',
          element:<PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://talenify-server.vercel.app/jobs/single/${params.id}`)
          
        },
        {
          path:'/myBids',
          element:<PrivateRoutes><MyBids></MyBids></PrivateRoutes>
        },
        {
          path:'/bidRequest',
          element:<PrivateRoutes><BidRequests></BidRequests></PrivateRoutes>,
          
        }
      
      ]
    },
   
  ]);

export default router;