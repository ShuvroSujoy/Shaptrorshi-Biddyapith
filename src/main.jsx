import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './LayOut/MainLayOut';
import Home from './Component/Home';
import Courses from './Component/Courses';
import AboutUs from './Component/AboutUs';
import Admission from './Component/Admission';
import Class6 from './Classes/Class6';
import Class3to5 from './Classes/Class3to5';
import Class8 from './Classes/Class8';
import Class9 from './Classes/Class9';
import Class7 from './Classes/Class7';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course",
        element: <Courses />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/class3to5",
        element: <Class3to5 />,
      },
      {
        path: "/class6",
        element: <Class6 />,
      },
      {
        path: "/class7",
        element: <Class7 />,
      },
      {
        path: "/class8",
        element: <Class8 />,
      },
      {
        path: "/class9",
        element: <Class9 />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
