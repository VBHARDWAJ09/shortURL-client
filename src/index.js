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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Store from './components/store';
import Private from './components/Wrapper/Private';
import Public from './components/Wrapper/Public';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Public><Login /></Public>
  }, {
    path: "/register",
    element: <Public><Register /></Public>
  }, {
    path: "/",
    element: <Private><MainPage /></Private>,
  }, {
    path: "/details",
    errorElement: <NotFound />,
    children: [
      {
        path: "/details/:page",
        element: <Private><Details /></Private>,
        errorElement: <NotFound />,
      }, {
        path: "/details",
        element: <Private><Details /></Private>,
        errorElement: <NotFound />,
      }
    ]
  }, {
    path: "/page-details/:id",
    element: <Private><PageDetails /></Private>,
  }, {
    path: "/:shortUrl",
    element: <Public><ShortUrl /></Public>
  }, {
    path: "*",
    element: <NotFound />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <Toaster />
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
