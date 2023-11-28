import "./App.css";
import Home from "./pages/user/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from "react";
import homeRoute from "../src/pages/user/home/HomeRoutes";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import axios from 'axios'
import { AmountProvider } from "./common/ContextApi.jsx";

const App = () => {
  const [routes, setRoutes] = useState([
    { path: "/*", element: <Home height={200} width={100} /> },
  ]);
  useEffect(() => {
    setRoutes(homeRoute);
  }, []);
  const phoneNumber = "+918015287599";
  // +91 80152 87599
  const customMessage = "Hello, I have a question for you!";

  // Encode the phone number and message
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const encodedMessage = encodeURIComponent(customMessage);
  const serverURL =`http://${window.location.hostname}:8080`;
  axios.defaults.baseURL = serverURL;

  const whatsappLink = `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`;
  return (
    <AmountProvider>
    <>

  
      <RouterProvider router={createBrowserRouter(routes)} />
      {/* <Home /> */}

      {/* <ReactWhatsapp  number="7034928633" message="Hello" /> */}
      <a
        href={whatsappLink}
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <i class="fa fa-whatsapp whatsapp-icon"></i>
         */}
        <WhatsAppIcon
          sx={{
            fontSize: { xs: "40px", sm: "50px", md: "50px" },
            paddingTop: { md: "8px", sx: "10px" },
          }}
        />
      </a>
    </>
      </AmountProvider>
  );
};

export default App;
