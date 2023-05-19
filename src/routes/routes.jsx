import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRouter";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/all-toys",
            element: <AllToys />,
         },
         {
            path: "/my-toys",
            element: (
               <PrivateRoute>
                  <MyToys />
               </PrivateRoute>
            ),
         },
         {
            path: "/toy-details/:id",
            element: (
               <PrivateRoute>
                  <ToyDetails />
               </PrivateRoute>
            ),
         },
         {
            path: "/add-toy",
            element: (
               <PrivateRoute>
                  <AddToy />
               </PrivateRoute>
            ),
         },
         {
            path: "/update-toy/:id",
            element: (
               <PrivateRoute>
                  {" "}
                  <UpdateToy />
               </PrivateRoute>
            ),
         },
         {
            path: "/blog",
            element: <Blog />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/login",
            element: <Login />,
         },
      ],
   },
]);
