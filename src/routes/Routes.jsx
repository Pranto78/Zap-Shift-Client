import React from 'react';
// import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import Coverage from '../pages/Coverage/Coverage';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import AuthLayOut from '../pages/AuthLayOut/AuthLayOut';
import PrivateRoute from './PrivateRoute';
import SendParcel from '../pages/SendParcel/SendParcel';
import Rider from '../components/Rider/Rider';
import DashBoard from '../pages/DashBoard/DashBoard';
import MyParcels from '../pages/MyParcels/MyParcels';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayOut,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration,
      },
    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'my-parcels',
        Component:MyParcels
      }
    ]
  }
]);
