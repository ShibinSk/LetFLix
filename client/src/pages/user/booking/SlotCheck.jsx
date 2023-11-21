import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
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
import { Link, useNavigate } from "react-router-dom";
import BookingService from "./BookingService";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import { useLocation } from "react-router-dom";
import { amountContext } from "../../../common/ContextApi";

const SlotCheck = () => {
  const navigate = useNavigate();
  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "/img2.JPG",
    },
    {
      label: "Bird",
      imgPath:
        "/img1.JPG",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "/img3.JPG",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "/img2.JPG",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState(dayjs());
  const [slot, setSlot] = useState("");
  const maxSteps = images.length;
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
              Standard theater In Hennur
            </Typography>
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
                ₹999 for 4 or fewer people including taxes (Rs 200 per extra
                person)
              </Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: "60vh",
                        display: "block",
                        maxWidth: "90%",
                        margin: "0 auto", // Center the image
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            />
            <Box sx={{ paddingLeft: "13%" }}>
              <Typography> - 135 inch HD Screen</Typography>
              <Typography> - 600W Sony Surround sound system</Typography>
              <Typography> - Ideal for couples, families & friends</Typography>
              <Typography>
                {" "}
                - Food & Beverages can be ordered at the theatre.
              </Typography>
            </Box>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
                {/* <Calendar onChange={onChange} value={value} /> */}
              </Grid>
            </Grid>
            {/* <a
              href=""
              className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown"
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
               
                  className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown"
                  // style={{ backgroundColor: 'transparent',height:'50',width:'50px',paddingBottom:'5px' }}
                  onClick={() => setSlot("1")}
                  variant="outlined"
                  fullWidth
                >
                  <h6>11.00 am to 01.30 pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown"
                  onClick={() => setSlot("2")}
                  variant="outlined"
                  fullWidth
                >
                  <h6> 02.00 pm to 04.30 pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown"
                  onClick={() => setSlot("3")}
                  variant="outlined"
                  fullWidth
                >
                  <h6>05.00 pm to 07.30 pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Grid item lg></Grid>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown"
                  onClick={() => setSlot("4")}
                  variant="outlined"
                  fullWidth
                >
                  <h6>08.00 pm to 10.30 pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown"
                  onClick={() => setSlot("5")}
                  variant="outlined"
                  fullWidth
                >
                  <h6> 11.00 am to 01.30 pm</h6>
                </Button>
              </Grid>
              <Grid item lg></Grid>
            </Grid>
            <br />
            <br />
            <Grid container spacing={2}>
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
            </Grid>
            <br />
            <br />
            {slot.length > 0 && (
              // <Link to={"/decoration"}>
              <Link to={`/decoration/${slot}/${value}`}>
                <Button
                  // onClick={handleClick}
                  sx={{ width: "100%", height: "10%" }}
                  variant="contained"
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
