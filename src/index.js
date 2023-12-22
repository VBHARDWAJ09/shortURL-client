import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './components/MainPage/MainPage'
import ShortUrl from './components/ShortUrl/ShortUrl';
import Details from './components/Details/Details';
import PageDetails from './components/PageDetails/PageDetails';
import NotFound from './components/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <NotFound />
      },
      {
        path: "/:shortUrl",
        element: <ShortUrl />,
        errorElement: <NotFound />
      }
    ]
  }, {
    path: "/details",
    errorElement: <NotFound />,
    children: [
      {
        path: "/details/:page",
        element: <Details />,
        errorElement: <NotFound />,
      }, {
        path: "/details",
        element: <Details />,
        errorElement: <NotFound />,
      }
    ]
  }, {
    path: "/page-details/:id",
    element: <PageDetails />,
  }, {
    path: "/url-page/:shortUrl",
    element: <ShortUrl />,
  }, {
    path: "*",
    element: <NotFound />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
