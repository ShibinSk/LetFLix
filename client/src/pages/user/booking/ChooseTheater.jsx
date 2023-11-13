import React, { useContext, useState } from "react";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

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
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { amountContext } from "../../../common/ContextApi.jsx";


const ChooseTheater = () => {
  const { amount,setAmount  } = useContext(amountContext);
  const [selectedDate, setSelectedDate] = useState("");
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
              ChooseTheater
            </li>
          </ol>
        </div>
      </div>
      <div
        className="container-fluid contact py-6 wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-1">
              <img
                src="/2023-09-26.jpg"
                className="img-fluid h-100 w-100 rounded-start"
                style={{ objectFit: "cover", opacity: 0.7 }}
                alt=""
              />
            </div>
            <div className="col-10">
              <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                <div className="text-center">
                  <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                    Choose Us
                  </small>
                  <h1 className="display-5 mb-5">Choose Your Theatre</h1>
                </div>
                <div className="row g-4 form">
                  <div className="col-lg-4 col-md-6">
                    <label htmlFor="dateInput">Select Date</label>
                    <br />
                    <TextField
                      id="outlined-basic"
                      type="date"
                      variant="outlined"
                      name="dateInput"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </div>

                  <div className="col-12 text-center">
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                          <Typography variant={"h5"} sx={{ color: "#d4a762" }}>
                            Standard Theatre
                          </Typography>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="/2023-09-26.jpg"
                              alt="green iguana"
                            />
                            <CardContent>
                              {/* <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  Lizard
                                </Typography> */}
                              <Typography
                                variant="h6"
                                sx={{ fontSize: "15px" }}
                                color="text.primary"
                              >
                                ₹999 for 4 or less people including taxes (Rs
                                200 per extra person)
                              </Typography>{" "}
                              <Typography
                                gutterBottom
                                variant="h6"
                                sx={{ fontSize: "13px", color: "red" }}
                                component="div"
                              >
                                0 slots available on 25/10/2023.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Grid tem xs={12} sm={6} md={12}>
                              <BottomNavigation
                                showLabels
                                value={0}
                                style={{ backgroundColor: "transparent" }}
                              >
                                <BottomNavigationAction
                                  // label="Check Slot"
                                  icon={
                                    <Button
                                      variant="contained"
                                      color="primary" // Set the color you desire
                                      component={Link}
                                      to="/checkSlot"
                                      onClick={()=>{
                                        setAmount(1699)
                                      }}
                                    >
                                      
                                      Check Slot
                                    </Button>
                                  }
                                />
                              </BottomNavigation>

                              <Typography
                                sx={{
                                  fontSize: "13px",
                                  color: "black",
                                  fontWeight: "700px",
                                  paddingLeft: "5px",
                                }}
                                variant={"h5"}
                              >
                                2 - 6 Peoples
                              </Typography>
                              <PeopleIcon sx={{ paddingLeft: "3px" }} />
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                          <Typography variant={"h5"} sx={{ color: "#d4a762" }}>
                            {" "}
                            Romantic Theatre
                          </Typography>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image="/2023-09-26.jpg"
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                variant="h6"
                                sx={{ fontSize: "15px" }}
                                color="text.primary"
                              >
                                ₹1799 for 2 people including taxes (Decorations
                                included)
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="h6"
                                sx={{ fontSize: "13px", color: "red" }}
                                component="div"
                              >
                                0 slots available on 25/10/2023.
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Grid item xs={12} sm={6} md={12}>
                              <BottomNavigation
                                showLabels
                                value={0}
                                style={{ backgroundColor: "transparent" }}
                              >
                                <BottomNavigationAction
                                  // label="Check Slot"
                                  icon={
                                    <Button
                                    onClick={()=>{
                                      setAmount(1000)
                                    }}
                                      variant="contained"
                                      color="primary" // Set the color you desire
                                      component={Link}
                                      // to={{
                                      //   pathname: '/checkSlot',
                                      //   state: { isNaN: 'Hello from the button!' }
                                      // }}
                                      to="/checkSlot"
                                    >
                                      Check Slot
                                    </Button>
                                  }
                                />
                              </BottomNavigation>
                              <Typography
                                sx={{
                                  fontSize: "13px",
                                  color: "black",
                                  fontWeight: "700px",
                                  paddingLeft: "5px",
                                  // color:'blue'
                                }}
                                
                                variant={"h5"}
                              >
                                2 Peoples only
                              </Typography>
                              <PeopleIcon sx={{ paddingLeft: "3px" }} />
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              <img
                src="/2023-09-26.jpg"
                className="img-fluid h-100 w-100 rounded-end"
                style={{ objectFit: "cover", opacity: 0.7 }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseTheater;
