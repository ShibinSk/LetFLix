import React, { useContext, useState } from "react";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  CardActionArea,
  CardActions,
  Container,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { amountContext } from "../../../common/ContextApi.jsx";

const ChooseEvent = () => {
  const {evType, setEvType } = useContext(amountContext);
  

  const handleOptionSelect = (option) => {
   setEvType(option)
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-light py-6 my-6 mt-0">
        <div className="container text-center animated bounceInDown">
          <h1 className="display-1 mb-4">Choose Your Theatre</h1>
          <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item text-dark" aria-current="page">
              ChooseEvent
            </li>
          </ol>
        </div>
      </div>
      <div
        className="container-fluid contact py-3 wow bounceInUp"
        data-wow-delay="0.5s"
      >
        {/* <Grid className="container"> */}
         <Container>
         <div className="border-bottom border-top border-primary  py-3 px-3">
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to={`/chooseTheater`} >
                  <div class="article-card">
                    <div class="content">
                      {/* <p class="date">Jan 1, 2022</p> */}
                      {/* <p class="title">BirthDay</p> */}
                      
                    </div>
                    <img
                      onClick={() => handleOptionSelect("BirthDay")}
                      src="T1/HAPPY BR.jpg"
                      alt="article-cover"
                    />
                  </div>
                  </Link>
                  
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to={`/chooseTheater`}>
                  <div class="article-card">
                    <div class="content">
                      {/* <p class="date">Jan 1, 2022</p>
                      <p class="title">Article Title Goes Here</p> */}
                    </div>
                    <img
                      src="T1/ANNIVESSARY.jpg"
                      alt="article-cover"
                      onClick={() => handleOptionSelect("Anniversary")}
                    />
                  </div>
                  
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
              <Link to={`/chooseTheater`} >

                  <div class="article-card">
                    <div class="content">
                      {/* <p class="date">Jan 1, 2022</p> */}
                      {/* <p class="title">BrideToBe</p> */}
                    </div>
                    <img
                      src="T1/BRIDE TO BE.jpg"
                      alt="article-cover"
                      onClick={() => handleOptionSelect("BrideToBe")}
                    />
                  </div>
              </Link>
                  
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to={`/chooseTheater`}>

                  <div class="article-card">
                    <div class="content">
                      {/* <p class="date">Jan 1, 2022</p> */}
                      {/* <p class="title">Article Title Goes Here</p>  */}
                    </div>
                    <img
                      src="T1/FAREWELL.jpg"
                      alt="article-cover"
                      onClick={() => handleOptionSelect("Farewell")}
                    />
                  </div>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to={`/chooseTheater`}>
                  
                  <div class="article-card">
                    <div class="content">
                      {/* <p class="date">Jan 1, 2022</p> */}
                      {/* <p class="title">Bride to be</p> */}
                    </div>
                    <img
                      src="T1/PROPSEL.jpg"
                      alt="article-cover"
                      onClick={() => handleOptionSelect("proposal")}
                    />
                  </div>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to={`/chooseTheater`}>
                  
                  <div class="article-card">
                    <div class="content">
                      {/* <p class="date">Jan 1, 2022</p> */}
                      {/* <p class="title">Article Title Goes Here</p> */}
                    </div>
                    <img
                      src="T1/LIVE.jpg"
                      alt="article-cover"
                      onClick={() => handleOptionSelect("LiveMatch")}

                    />
                  </div>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to={`/chooseTheater`}>

                  <div class="article-card">
                    <div class="content">
                      {/* <p class="date">Jan 1, 2022</p> */}
                      {/* <p class="title">Bespoke Date</p> */}
                    </div>
                    <img
                      src="T1/dates.jpg"
                      alt="article-cover"
                      onClick={() => handleOptionSelect("BespokeDate")}
                    />
                  </div>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Link to={`/chooseTheater`}>
                  
                  <div class="article-card">
                    <div class="content">
                      {/* <p class="date">Jan 1, 2022</p> */}
                      {/* <p class="title">Movie Marathon</p> */}
                    </div>
                    <img
                      src="T1/movie marathon.jpg"
                      alt="article-cover"
                      onClick={() => handleOptionSelect("MovieMarathon")}
                    />
                  </div>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
         </Container>
        {/* </Grid> */}
      </div>
      <Footer />
    </div>
  );
};

export default ChooseEvent;
