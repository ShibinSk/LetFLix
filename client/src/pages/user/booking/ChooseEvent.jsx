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
  const { amount, setAmount } = useContext(amountContext);
  const [selectedDate, setSelectedDate] = useState("");
  const [ppl, setPpl] = React.useState("");
  const [initialAmount] = useState(1900);
  useState(() => {
    setAmount(initialAmount);
  }, [setAmount, initialAmount]);
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setPpl(selectedValue);
    setAmount((prev) => {
      if (selectedValue === 5) {
        return 2100;
      } else if (selectedValue === 6) {
        return 2300;
      } else if (selectedValue == 7) {
        return 2500;
      } else if (selectedValue == 8) {
        return 2700;
      } else if (selectedValue === "") {
        return 1900;
      }
      return prev;
    });
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const cardsData = [
    {
      title: "Hennur",
      description: "0 slots available on 24/10/2023.",
      image: "/2023-09-26.jpg",
    },
    {
      title: "Romantic Theatre",
      description: "0 slots available on 24/10/2023.",
      image: "/2023-09-26.jpg",
    },
  ];

  const T1Head = ` Theatre MAX`;

  const T2Head = ` Theatre LaLaLand`;
  return (
    <div>
      Choose
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
                  <div class="article-card">
                    <div class="content">
                      <p class="date">Jan 1, 2022</p>
                      <p class="title">Article Title Goes Here</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                      alt="article-cover"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <div class="article-card">
                    <div class="content">
                      <p class="date">Jan 1, 2022</p>
                      <p class="title">Article Title Goes Here</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                      alt="article-cover"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <div class="article-card">
                    <div class="content">
                      <p class="date">Jan 1, 2022</p>
                      <p class="title">Article Title Goes Here</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                      alt="article-cover"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <div class="article-card">
                    <div class="content">
                      <p class="date">Jan 1, 2022</p>
                      <p class="title">Article Title Goes Here</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                      alt="article-cover"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <div class="article-card">
                    <div class="content">
                      <p class="date">Jan 1, 2022</p>
                      <p class="title">Article Title Goes Here</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                      alt="article-cover"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <div class="article-card">
                    <div class="content">
                      <p class="date">Jan 1, 2022</p>
                      <p class="title">Article Title Goes Here</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                      alt="article-cover"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <div class="article-card">
                    <div class="content">
                      <p class="date">Jan 1, 2022</p>
                      <p class="title">Article Title Goes Here</p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                      alt="article-cover"
                    />
                  </div>
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
