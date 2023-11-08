import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Css from './pages/Css';
import Html from './pages/Html';
import Javascript from './pages/Javascript';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>sorrry</h1>,
  },
  {
    path: "/Html",
    element: <Html/>,
    errorElement: <h1>sorrry</h1>,
  },
  {
    path: "/Css",
    element: <Css/>,
    errorElement: <h1>sorrry</h1>,
  },
  {
    path: "/Javascript",
    element: <Javascript/>,
    errorElement: <h1>sorrry</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
