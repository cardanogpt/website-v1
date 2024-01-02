import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Buy from './page/Buy';
import Tokenomics from './page/Tokenomics';
import Blog from './page/Blog';
import Docs from './page/Docs';
import Discord from './page/Discord';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/tokenomics",
    element: <Tokenomics />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/docs",
    element: <Docs />
  },
  {
    path: "/learn",
    element: <Docs pathname='learn' />
  },
  {
    path: "/disclaimer",
    element: <Docs pathname='disclaimer' />
  },
  {
    path: "/discord",
    element: <Discord />
  },
  {
    path: "*",
    element: <Navigate to="/" />,
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
reportWebVitals();
