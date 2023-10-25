
import "./App.css";
import Home from "./pages/user/home/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import homeRoute from '../src/pages/user/home/HomeRoutes'



const App=()=> {
  const [routes, setRoutes] = useState([{ path: '/*', element: <Home height={200} width={100} /> }]);
  useEffect(()=>{
    setRoutes(
      homeRoute
    )

  },[])
  return (
    <>
     <RouterProvider router={createBrowserRouter(routes)} />
      {/* <Home /> */}

    </>
  );
}

export default App;
