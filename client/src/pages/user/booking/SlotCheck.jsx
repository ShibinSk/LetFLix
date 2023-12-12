import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
// import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import BookingService from "./BookingService";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import { useLocation } from "react-router-dom";
import { amountContext } from "../../../common/ContextApi";
import ReactPlayer from "react-player";

import "react-calendar/dist/Calendar.css";
// import Calendar from 'react-calendar';

const SlotCheck = () => {
  const { T1Head, T2Head } = useParams();
  console.log(useParams());
  const navigate = useNavigate();
  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath: "/img2.JPG",
    },
    {
      label: "Bird",
      imgPath: "/img1.JPG",
    },
    {
      label: "Bali, Indonesia",
      imgPath: "/img3.JPG",
    },
    {
      label: "Goč, Serbia",
      imgPath: "/img2.JPG",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState(dayjs());
  const [slot, setSlot] = useState("");
  const maxSteps = images.length;
  const [date, setDate] = useState(new Date());

  const { amount, setAmount } = useContext(amountContext);
  //   const [value, onChange] = useState(new Date());
  console.log(slot);
  console.log(value);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleClick = () => {
    console.log("Clicked");
    const dataToPass = {
      value /* value for state1 */,
      slot /* value for state2 */,
    };
    // navigate('/decoration', { state: dataToPass });
  };
  console.log(amount, "amount");
  useEffect(() => {
    BookingService.test().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Box sx={{ padding: "2%" }} className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              {/* {  T1Head } */}
            </Typography>
            <br />
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 60,
                bgcolor: "background.default",
              }}
            >
              <Typography sx={{ textAlign: "center", paddingLeft: "13%" }}>
                { T1Head?? T2Head}
              </Typography>
            </Paper>

            <Grid
              item
              xs={12}
              md={6}
              style={{ position: "relative", paddingTop: "56.25%" }}
            >
              <ReactPlayer
                url="https://youtube.com/shorts/xMl-RLSW96g?si=Ta5lZrT0uh9odpfX"
                style={{ position: "absolute", top: 0, left: 0 }}
                width="100%"
                height="100%"
              />
            </Grid>
              {T2Head}
              {T1Head === "Theatre MAX" ? (
  <Box sx={{ paddingLeft: "13%" }}>
    <Typography> - 5 cozy Recliners </Typography>
    <Typography> - Captivating 4K projection</Typography>
    <Typography> - Large 150-inch Screen</Typography>
    <Typography> - Immersive Dolby Atmos audio</Typography>
    <Typography>
      {" "}
      - 8 world class Speakers: Jamo Denmark + Bose Atmos speakers
    </Typography>
  </Box>
) : (
  <Box sx={{ paddingLeft: "13%" }}>
    <Typography> - A snug cuddle Recliner for two and a canopy over you. </Typography>
    <Typography> - Grand 150-inch Screen</Typography>
    <Typography> - Bose Atmos + Onkyo theatre speakers</Typography>
  </Box>
)}

          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="app">
                  <h1 className="text-center"> Calendar</h1>
                  <div className="calendar-container">
                    <Calendar onChange={setDate} value={date} />
                  </div>
                  <p className="text-center">
                    <span className="bold">Selected Date:</span>{" "}
                    {date.toDateString()}
                  </p>
                </div>

                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider> */}
                {/* <Calendar onChange={onChange} value={value} /> */}
              </Grid>
            </Grid>
            {/* <a
              href=""
              className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown"
            >
              <BottomNavigation
                showLabels
                value={0}
                className="nav-item nav-link active"
                style={{
                  backgroundColor: "transparent",
                  height: "10px",
                  width: "50px",
                  paddingBottom: "5px",
                }}
              ></BottomNavigation>

              <h6> 11.00 am to 01.30 pm</h6>
            </a> */}

            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-2 py-1 mb-4 animated bounceInDown"
                  style={{ height: "60%", width: "20vh" }}
                  onClick={() => setSlot("1")}
                  variant="outlined"
                  fullWidth
                >
                  <h6>11.00am 01.30pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-2 py-1 mb-4 animated bounceInDown"
                  style={{ height: "60%", width: "20vh" }}
                  onClick={() => setSlot("2")}
                  variant="outlined"
                  fullWidth
                >
                  <h6> 02.00pm 04.30pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-2 py-1 mb-4 animated bounceInDown"
                  style={{ height: "60%", width: "20vh" }}
                  onClick={() => setSlot("3")}
                  variant="outlined"
                  fullWidth
                >
                  <h6>05.00pm 07.30pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Grid item lg></Grid>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-2 py-1 mb-4 animated bounceInDown"
                  style={{ height: "60%", width: "20vh" }}
                  onClick={() => setSlot("4")}
                  variant="outlined"
                  fullWidth
                >
                  <h6>08.00pm 10.30pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-2 py-1 mb-4 animated bounceInDown"
                  style={{ height: "60%", width: "20vh" }}
                  onClick={() => setSlot("5")}
                  variant="outlined"
                  fullWidth
                >
                  <h6> 11.00am 01.30pm</h6>
                </Button>
              </Grid>
              <Grid item lg></Grid>
            </Grid>
            <br />
            <br />
            {/* <Grid container spacing={2}>
              <Grid item xs={6} sm={4} style={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "green",
                    width: "23px",
                    height: "23px",
                    display: "inline-block",
                    marginRight: 1,
                  }}
                ></Box>

                <span style={{ color: "green" }}>Available</span>
              </Grid>
              <Grid item xs={6} sm={4} style={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "red",
                    width: "23px",
                    height: "23px",
                    display: "inline-block",
                    marginRight: 1,
                  }}
                ></Box>

                <span style={{ color: "red" }}>Not Available</span>
              </Grid>
            </Grid> */}
            <br />
            <br />
            {slot.length > 0 && (
              // <Link to={"/decoration"}>
              <Link to={`/decoration`}>
                <Button
                  // onClick={handleClick}
                  sx={{ width: "100%", height: "10%" }}
                  variant="contained"
                  style={{ backgroundColor: "#ffc107" }}
                  className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft"
                >
                  Book Now
                </Button>
              </Link>
            )}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default SlotCheck;
