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
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
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
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);
  const [select6, setSelect6] = useState(false);

  const { amount, setAmount } = useContext(amountContext);
  const { tName, setTname } = useContext(amountContext);
  //   const [value, onChange] = useState(new Date());
  console.log(slot);
  console.log(value);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleButtonClick = (buttonNumber) => {
    // Toggle the state of the corresponding button
   
    switch (buttonNumber) {
      case 1:
        setSelect1((prev) => !prev);
        setSlot("1")
        break;
      case 2:
        setSelect2((prev) => !prev);
        setSlot("2")
        break;
      case 3:
        setSelect3((prev) => !prev);
        setSlot("3")
        break;
      case 4:
        setSelect4((prev) => !prev);
        setSlot("4")
        break;
      case 5:
        setSelect5((prev) => !prev);
        setSlot("5")
        break;
      default:
        break;
    }
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
{amount}
{slot}
{/* {select} */}
      <Box sx={{ padding: "2%" }} className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <DatePickerCalendar
              style={{ height: "3000px" }}
              date={date}
              onDateChange={setDate}
              locale={enGB}
            />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-2 py-1 mb-4 animated bounceInDown"
                  style={{
                    height: '60%',
                    width: '20vh',
                    backgroundColor: select1 ? '#666161' : '#ffcc00',
                  }}
                  
                   onClick={() => handleButtonClick(1)}
                  variant="outlined"
                  fullWidth
                >
                  <h6>11.00am 01.30pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-2 py-1 mb-4 animated bounceInDown"
                  style={{ height: "60%", width: "20vh",
                  backgroundColor: select2 ? '#666161' : '#ffcc00',
                 }}
                 onClick={() => handleButtonClick(2)}
                  variant="outlined"
                  fullWidth
                >
                  <h6> 02.00pm 04.30pm</h6>
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-2 py-1 mb-4 animated bounceInDown"
                  style={{ height: "60%", width: "20vh",
                  backgroundColor: select3 ? '#666161' : '#ffcc00', }}
                  onClick={() => handleButtonClick(3)}
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
                  style={{ height: "60%", width: "20vh",
                  backgroundColor: select4 ? '#666161' : '#ffcc00', }}
                  onClick={() => handleButtonClick(4)}
                  variant="outlined"
                  fullWidth
                >
                  <h6>08.00pm 10.30pm</h6>
                </Button>
              </Grid>

              <Grid item xs={6} sm={6} md={4} lg={4}>
                <Button
                  className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-2 py-1 mb-4 animated bounceInDown"
                  style={{ height: "60%", width: "20vh",
                  backgroundColor: select5 ? '#666161' : '#ffcc00',}}
                  onClick={() => handleButtonClick(5)}
                  variant="outlined"
                  fullWidth
                >
                  <h6> 11.00am 01.30pm</h6>
                </Button>
              </Grid>
              <Grid item lg></Grid>
            </Grid>
            <br />
            {slot.length > 0 && (
              // <Link to={"/decoration"}>
              <Link to={`/decoration/${date}/${slot}`}>
                <Button
                  // onClick={handleClick}
                  sx={{ width: "50%", height: "5%" }}
                  variant="contained"
                  style={{ backgroundColor: "#ffc107" }}
                  className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft"
                >
                  Book Now 
                </Button>
              </Link>
            )}

            {/* <Typography variant="h5" sx={{ textAlign: "center" }}> */}
            {/* {  T1Head } */}
            {/* </Typography> */}
            {/* <br /> */}
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
              {/* <Typography sx={{ textAlign: "center", paddingLeft: "13%" }}>
                {T1Head ?? T2Head}
              </Typography> */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid spacing={2}>
              <Grid sx={{paddingLeft:"100px"}}>
              <Box
                // bgcolor="linear-gradient(45deg, #ffcc00 30%, #ffcc00 90%)"
                color="#ffcc00"
                p={1}
                borderRadius={4}
                boxShadow={3}
                width={'80%'}
                backgroundColor="#ffcc00"
                paddingLeft={'30%'}
                
                
              >
                <Typography variant="h6">{tName}</Typography>
              </Box>
              </Grid>
              
              <Grid
                item
                xs={8}
                md={8}
                style={{
                  position: "relative",
                  paddingTop: "50.25%",
                  marginLeft: "8%",
                  marginTop: "8%",
                }}
              >
                <ReactPlayer
                  url="https://youtube.com/shorts/xMl-RLSW96g?si=Ta5lZrT0uh9odpfX"
                  style={{ position: "absolute", top: 0, left: 0 }}
                  width="130%"
                  height="170%"
                  playing="true"
                />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Grid>
            </Grid>
            <br />
            <br />

            {/* <Box sx={{ paddingLeft: "50%",  }}>
              <Typography> - 5 cozy Recliners </Typography>
              <Typography> - Captivating 4K projection</Typography>
              <Typography> - Large 150-inch Screen</Typography>
              <Typography> - Immersive Dolby Atmos audio</Typography>
              <Typography>
                {" "}
                - 8 world class Speakers: Jamo Denmark + Bose Atmos speakers
              </Typography>
            </Box>  */}
          </Grid>
          {/* <Box sx={{ paddingLeft: "60%" }}>
              <Typography>
                {" "}
                - A snug cuddle Recliner for two and a canopy over you.{" "}
              </Typography>
              <Typography> - Grand 150-inch Screen</Typography>
              <Typography> - Bose Atmos + Onkyo theatre speakers</Typography>
            </Box> */}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default SlotCheck;
