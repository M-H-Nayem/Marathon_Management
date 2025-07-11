import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./Pages/Sign/Register.jsx";
import Login from "./Pages/Sign/Login.jsx";
import AuthProvider from "./AuthProvider.jsx";
import DashBoard from "./Pages/Marathon/DashBoard.jsx";
import Marathons from "./Pages/Marathon/Marathons.jsx";
import PrivateRoute from "../PrivateRoute.jsx";
import AddMarathon from "./Pages/Marathon/Dashboard/AddMarathon.jsx";
import MyMarathonList from "./Pages/Marathon/Dashboard/MyMarathonList.jsx";
import MyApplyList from "./Pages/Marathon/Dashboard/MyApplyList.jsx";
import HomePage from "./Components/HomePage.jsx";
import Loading from "./Components/Loading/Loading.jsx";
import Error from "./Components/Error/Error.jsx";
import MarathonDetails from "./Pages/Marathon/MarathonDetails.jsx";
import MarathonRegi from "./Components/MarathonRegistration/MarathonRegi.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import DashHome from "./Pages/Marathon/Dashboard/DashHome.jsx";
import { HelmetProvider } from "react-helmet-async";

let Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        // loader: () => fetch("https://marathon-server-side.vercel.app/marathons-limit"),
        element: <HomePage></HomePage>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/marathons",
        // loader: () =>fetch("https://marathon-server-side.vercel.app/marathons"),
        // hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <Marathons></Marathons>
          </PrivateRoute>
        ),
      },
      {
        path: "/marathon_details/:id",
        loader: ({ params }) =>
          fetch(
            `https://marathon-server-side.vercel.app/marathons/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <MarathonDetails></MarathonDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/register_marathon/:id",
        loader: ({ params }) =>
          fetch(
            `https://marathon-server-side.vercel.app/marathons/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <MarathonRegi></MarathonRegi>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <DashHome></DashHome>,
          },
          {
            path: "/dashboard/addmarathon",
            element: <AddMarathon></AddMarathon>,
          },
          {
            path: "/dashboard/my-marathons",

            element: <MyMarathonList></MyMarathonList>,
          },
          {
            path: "/dashboard/myapply",

            element: <MyApplyList></MyApplyList>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </>
);
