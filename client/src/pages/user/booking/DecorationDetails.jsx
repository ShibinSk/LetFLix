import {
  Autocomplete,
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Container,
  Grid,
  InputBase,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowBack as ArrowBackIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import Lottie from "react-lottie";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import BookingService from "./BookingService";
import dayjs from "dayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import enterOtp from "../../../assets/animation/116524-enter-password.json";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import { auth } from "../../../firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

// import firebase from 'firebase/app';

function DecorationDetails() {
  const [checkBok, setCheckBox] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCake, setSelecteCake] = useState(null);
  const [price, setPrice] = useState("1000");
  const [key, setKey] = useState(null);
  const [step, setStep] = useState("0");
  const [order, setOrder] = useState("0");

    const [OTP, setOTP] = useState("");
    const [ph, setPh] = useState("");
    const [ShowOtp, setSHowOtp] = useState(false);
    const [user, setUser] = useState(null);
    
    const [error, setError] = useState("");
    // const [loading, setLoading] = useState(false);
    const otp = {
      loop: true,
      autoplay: true,
      animationData: enterOtp,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

  const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [auctions, setAuctions] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [lot, setLot] = useState({
    lotNo: null,
    lotWt: null,
    basePrice: null,
    packingCharge: null,
    expectedPrice: null,
    color: "",
    type: "",
    attachments: {},
    grade: {
      mm8: {
        clean: null,
        sick: null,
        split: null,
      },
      mm7_8: {
        clean: null,
        sick: null,
        split: null,
      },
    },

    quality: {
      green: null,
      average: null,
      fruit: null,
      belowAverage: null,
    },

    quantity: {
      ltrWt: null,
      moisture: null,
      bagsNo: null,
      netWt: null,
    },
    seller: {
      name: "",
      status: 100,
      createdAt: dayjs(),
      updatedAt: dayjs(),
      kind: "seller",
      _id: "",
    },
    auction: {
      auctionNo: -1,
      _id: "",
      createdAt: dayjs(),
      updatedAt: dayjs(),
      status: 201,
      weight: 0,
      maxNoOfLots: 0,
      lots: [],
    },
    purchase: {},
    // status: LotLifeCycleStates.SCHEDULED,
  });
  // const [showOTP, setShowOTP] = useState(false);
  // const [user, setUser] = useState(null);
  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleCakeSelect = (option) => {
    setSelecteCake(option);
  };
  console.log(ph);

  console.log(OTP);

  const checkOutHandle = async () => {
    console.log("oo");
    BookingService.key().then((res) => {
      setKey(res.data);
      console.log(res, "res");
    });
    BookingService.checkout(price).then((res) => {
      console.log(res, "res");
      setOrder(res.data);
      console.log(window);
      const options = {
        key,
        amount: order.order.amount,
        currency: "INR",
        name: "LetzFlix",
        description: "Razorpay ",
        // image:"https://avatars.githubusercontent.com/u/96648429?s=96&v=4",
        order_id: order.order.id,
        callback_url: "http://localhost:5173//verifypayment",
        prefill: {
          name: "Shibin",
          email: "anandguptasir@gmail.com",
          contact: "1234567890",
        },
        notes: {
          address: "razorapy official",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    });
  };


  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log(response);
            onSignup();
          },
          "expired-callback": () => {},
        },
      );
    }
  }

  function onSignup() {
    event.preventDefault(); 
    setLoading(true);
    
    console.log('here');
    onCaptchVerify();
    console.log('bot');

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh,appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult, 'confirmationResult');
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setStep(null)
        setSHowOtp(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    console.log({OTP});
    window.confirmationResult
      .confirm(OTP)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        setSHowOtp(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }


  return (
    <>
      <Navbar />
     
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "130vh",
          background: "#FFFCF8",
        }}
      >
         <Toaster toastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container"></div>
        {step === "0" && (
          <Card
            sx={{
              background: "white",
              width: "90%",
              height: "80%",
              borderRadius: 4,
              overflow: "scroll",
            }}
          >
            <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Typography variant="h5">Decretion details</Typography>
            </Grid>
            <Link to={"/"}>
              <Button
                sx={{ mt: 2 }}
                onClick={() => {
                  setStep(1);
                }}
              >
                <ArrowBackIcon />
              </Button>
            </Link>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Birthday"
                    checked={selectedOption === "Birthday"}
                    onChange={() => handleOptionSelect("Birthday")}
                  />

                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/2023-09-26.jpg"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Birthday
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Anniversary"
                    checked={selectedOption === "Anniversary"}
                    onChange={() => handleOptionSelect("Anniversary")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/2023-09-26.jpg"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Anniversary
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Romantic Date"
                    checked={selectedOption === "Romantic Date"}
                    onChange={() => handleOptionSelect("Romantic Date")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/2023-09-26.jpg"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Romantic Date
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Marriage Proposal"
                    checked={selectedOption === "Marriage Proposal"}
                    onChange={() => handleOptionSelect("Marriage Proposal")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/2023-09-26.jpg"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Marriage Proposal
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Bride to be"
                    checked={selectedOption === "Bride to be"}
                    onChange={() => handleOptionSelect("Bride to be")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/2023-09-26.jpg"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Bride to be
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Farewell"
                    checked={selectedOption === "Farewell"}
                    onChange={() => handleOptionSelect("Farewell")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/2023-09-26.jpg"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Farewell
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Congratulations"
                    checked={selectedOption === "Congratulations"}
                    onChange={() => handleOptionSelect("Congratulations")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/2023-09-26.jpg"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Congratulations
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Baby Shower"
                    checked={selectedOption === "Baby Shower"}
                    onChange={() => handleOptionSelect("Baby Shower")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/2023-09-26.jpg"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Baby Shower
                  </Typography>
                </Grid>
              </Grid>
            </Container>

            <Box sx={{ ml: 8, mr: 8, mt: 2 }}></Box>

            <Container>
              <Grid
                container
                alignContent={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                {(selectedOption === "Birthday") |
                (selectedOption === "Baby Shower") ? (
                  <div>
                    <Grid item xs={12}>
                      <InputLabel>
                        {selectedOption === "Birthday"
                          ? "Nick name of birthday person"
                          : "Baby Sho"}
                      </InputLabel>
                      <InputBase
                        type="Text"
                        value={"value"}
                        // onChange={(e) =>
                        //   setLot({
                        //     ...lot,
                        //     color: e.target.value,
                        //   })
                        // }
                        placeholder=" Text"
                        sx={{
                          background: "#f4f5f4",
                          borderRadius: 50,
                          padding: 2,
                        }}
                        // disabled={loading}
                        fullWidth
                        required
                      />
                    </Grid>
                  </div>
                ) : (
                  <div>
                    <Grid item xs={12}>
                      <InputLabel>Your NickName</InputLabel>
                      <InputBase
                        type="Text"
                        value={"value"}
                        // onChange={(e) =>
                        //   setLot({
                        //     ...lot,
                        //     color: e.target.value,
                        //   })
                        // }
                        placeholder=" Text"
                        sx={{
                          background: "#f4f5f4",
                          borderRadius: 50,

                          padding: 2,
                        }}
                        // disabled={loading}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <InputLabel>Partner's NickName</InputLabel>
                      <InputBase
                        type="Text"
                        value={"value"}
                        // onChange={(e) =>
                        //   setLot({
                        //     ...lot,
                        //     color: e.target.value,
                        //   })
                        // }
                        placeholder=" Text"
                        sx={{
                          background: "#f4f5f4",
                          borderRadius: 50,
                          padding: 2,
                        }}
                        // disabled={loading}
                        fullWidth
                        required
                      />
                      <br />
                      <br />
                      <Grid
                        alignContent={"center"}
                        justifyContent={"center"}
                        display={"flex"}
                      >
                        <Grid item sx={6}>
                          <Typography variant="h5">Total Cost: 000</Typography>
                        </Grid>
                        {/* <Grid item sx={6}>
                      <Typography variant="h5">Total Cost: 000</Typography>
                    </Grid> */}
                        <br />
                      </Grid>
                    </Grid>
                  </div>
                )}
                <br />
                <br />
              </Grid>
              <br />
              <br />
            </Container>
            <br />

            <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Button
                onClick={() => {
                  setStep("1");
                }}
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
            <br />
          </Card>
        )}
        {step === "1" && (
          <Card
            sx={{
              background: "white",
              width: "90%",
              height: "80%",
              borderRadius: 4,
              overflow: "scroll",
            }}
          >
            <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Typography variant="h5">Select Cake</Typography>
            </Grid>
            <Link to={"/"}>
              <Button
                sx={{ mt: 2 }}
                onClick={() => {
                  setStep(0);
                }}
              >
                <ArrowBackIcon />
              </Button>
            </Link>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Cake1"
                    checked={selectedCake === "Cake1"}
                    onChange={() => handleCakeSelect("Cake1")}
                  />

                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/birthday-cake-unsplash.webp"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Cake
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Cake2"
                    checked={selectedCake === "Cake2"}
                    onChange={() => handleCakeSelect("Cake2")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/birthday-cake-unsplash.webp"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Cake
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Cake3"
                    checked={selectedCake === "Cake3"}
                    onChange={() => handleCakeSelect("Cake3")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/birthday-cake-unsplash.webp"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Cake
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Cake4"
                    checked={selectedCake === "Cake4"}
                    onChange={() => handleCakeSelect("Cake4")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/birthday-cake-unsplash.webp"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Cake
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Cake5"
                    checked={selectedCake === "Cake5"}
                    onChange={() => handleCakeSelect("Cake5")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/birthday-cake-unsplash.webp"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Cake
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Cake6"
                    checked={selectedCake === "Cake6"}
                    onChange={() => handleCakeSelect("Cake6")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/birthday-cake-unsplash.webp"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Cake
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Cake7"
                    checked={selectedCake === "Cake7"}
                    onChange={() => handleCakeSelect("Cake7")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/birthday-cake-unsplash.webp"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Cake
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Checkbox
                    type="radio"
                    name="options"
                    value="Cake8"
                    checked={selectedCake === "Cake8"}
                    onChange={() => handleCakeSelect("Cake8")}
                  />
                  <img
                    style={{ width: "50%", borderRadius: "50%", height: "60%" }}
                    src="/birthday-cake-unsplash.webp"
                    alt=""
                  />
                  <Typography paddingLeft={"24%"} paddingTop={"6px"}>
                    Cake
                  </Typography>
                </Grid>
              </Grid>
            </Container>

            <Box sx={{ ml: 8, mr: 8, mt: 2 }}></Box>
            <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Grid item sx={6}>
                <Typography variant="h5">Total Cost: 000</Typography>
              </Grid>
              {/* <Grid item sx={6}>
                      <Typography variant="h5">Total Cost: 000</Typography>
                    </Grid> */}
              <br />
            </Grid>
            <br />
            <br />
            <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <br />

              <Button
                onClick={() => {
                  setStep("2");
                  navigator;
                }}
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
            <br />
          </Card>
        )}
        
        {step === "2" && (
          <>
            <div>
              <Container>
                {/* <h2 style={{ textAlign: 'center' }}>Add New Lot</h2> */}
                <br />
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <Container maxWidth="sm">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h4">Standard Theatre</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">
                          <CalendarMonthIcon /> Date: 14/12/2023
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">
                          <AccessTimeIcon /> Time: 10:00 PM - 1:00 AM
                        </Typography>
                      </Grid>
                    </Grid>

                    {/* <Stepper activeStep={activeStep}>
              <Step>
                <StepLabel>Basic</StepLabel>
              </Step>
              <Step>
                <StepLabel>Quality</StepLabel>
              </Step>
            </Stepper> */}
                  </Container>
                  <br />
                  {activeStep == 0 && (
                    <form
                      onSubmit={(e) => {
                        // e.preventDefault();
                        // if (!lot.attachments.pic) {
                        //   setWarning('Image is missing');
                        //   setOpen(true);
                        // } else if (!lot.attachments.video) {
                        //   setWarning('Video is missing');
                        //   setOpen(true);
                        // } else {
                        //   setActiveStep(1);
                        // }
                      }}
                    >
                      <Grid container spacing={2}>
                        {/* <Grid item xs={12}>
                  <Autocomplete
                    options={auctions ?? []}
                    value={lot.auction ?? null}
                    onChange={(e, newValue) =>
                      newValue &&
                      setLot({
                        ...lot,
                        auction: newValue,
                      })
                    }
                    // getOptionLabel={(auction) =>
                    //   auction._id == ''
                    //     ? ''
                    //     : 'Auction ' + auction.auctionNo.toString() + (auction.date ? ' (' + auction.date?.format('DD/MM/YYYY hh:mm A') + ')' : '')
                    // }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Auction"
                        required
                        variant="standard"
                        sx={{
                          background: '#f4f5f4',
                          borderRadius: 50,
                          padding: 2,
                        }}
                      />
                    )}
                  />
                </Grid> */}

                        {/* <Grid item xs={12}>
                  <Autocomplete
                    options={users ?? []}
                    // value={lot.seller ?? null}
                    // onChange={(e, newValue) => newValue && setLot((req) => ({ ...req, seller: newValue }))}
                    getOptionLabel={(user) => user.name}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Seller"
                        variant="standard"
                        required
                        sx={{
                          background: '#f4f5f4',
                          borderRadius: 50,
                          padding: 2,
                        }}
                      />
                    )}
                  />
                </Grid> */}
                        <Grid item xs={12}>
                          <InputBase
                            type="text"
                            value={lot.color}
                            onChange={(e) =>
                              setLot({
                                ...lot,
                                color: e.target.value,
                              })
                            }
                            placeholder="Name"
                            sx={{
                              background: "#f4f5f4",
                              borderRadius: 50,
                              padding: 2,
                            }}
                            disabled={loading}
                            fullWidth
                            // required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          {/* <InputBase
                          
                            type="Number"
                            value={ph}
                            onChange={(e)=>{
                              setPh(e.target.value)
                            }}
                            placeholder="Phone Number"
                            sx={{
                              background: "#f4f5f4",
                              borderRadius: 50,
                              padding: 2,
                            }}
                            disabled={loading}
                            fullWidth
                            required
                          /> */}
                           <PhoneInput country={"in"} value={ph} onChange={setPh} />
                        </Grid>
                        <Grid item xs={12}>
                          <InputBase
                            type="Email"
                            value={lot.color}
                            onChange={(e) =>
                              setLot({
                                ...lot,
                                color: e.target.value,
                              })
                            }
                            placeholder="Email"
                            sx={{
                              background: "#f4f5f4",
                              borderRadius: 50,
                              padding: 2,
                            }}
                            disabled={loading}
                            fullWidth
                            // required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Autocomplete
                            options={availableSlots ?? []}
                            value={lot.lotNo ?? null}
                            getOptionLabel={(_lot) =>
                              lot.lotNo == -1 ? "" : "Lot #" + _lot
                            }
                            onChange={(e, newValue) =>
                              newValue &&
                              setLot({
                                ...lot,
                                lotNo: newValue,
                              })
                            }
                            // getOptionLabel={(auction) => 'Auction ' + auction.auctionNo.toString()}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Number Of People"
                                // required
                                variant="standard"
                                sx={{
                                  background: "#f4f5f4",
                                  borderRadius: 50,
                                  padding: 2,
                                }}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Autocomplete
                            options={availableSlots ?? []}
                            value={lot.lotNo ?? null}
                            getOptionLabel={(_lot) =>
                              lot.lotNo == -1 ? "" : "Lot #" + _lot
                            }
                            onChange={(e, newValue) =>
                              newValue &&
                              setLot({
                                ...lot,
                                lotNo: newValue,
                              })
                            }
                            // getOptionLabel={(auction) => 'Auction ' + auction.auctionNo.toString()}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Do You Want DecorationNo"
                                // required
                                variant="standard"
                                sx={{
                                  background: "#f4f5f4",
                                  borderRadius: 50,
                                  padding: 2,
                                }}
                              />
                            )}
                          />
                        </Grid>
                        <br />
                        <br />

                        <Grid
                          container
                          spacing={2}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <Grid item xs={12}>
                            <Typography variant="h4">
                              Total Cost: 1599
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1">
                              (All taxes included)
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid item xs={12}>
                          {/* <Link to={"/login"}> */}
                            <Button
                            // onClick={()=>setStep("3")}
                            
                            onClick={onSignup}

                            type="submit"
                              variant="contained"
                              sx={{
                                mt: 5,
                                borderRadius: 50,
                                padding: 2,
                                marginRight: 2,
                              }}
                              fullWidth
                            >
                              Next
                            </Button>
                          {/* </Link> */}
                        </Grid>
                      </Grid>
                      <br />
                      <br />
                      <br />
                    </form>
                  )}
                </Box>
              </Container>
            </div>
          </>
        )}

        {step === "3" && (
          <>
            <div>
              <Container>
                {/* <h2 style={{ textAlign: 'center' }}>Add New Lot</h2> */}
                <br />
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <Container maxWidth="sm">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h4">Standard Theatre</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">
                          <CalendarMonthIcon /> Date: 14/12/2023
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">
                          <AccessTimeIcon /> Time: 10:00 PM - 1:00 AM
                        </Typography>
                      </Grid>
                    </Grid>

                    {/* <Stepper activeStep={activeStep}>
              <Step>
                <StepLabel>Basic</StepLabel>
              </Step>
              <Step>
                <StepLabel>Quality</StepLabel>
              </Step>
            </Stepper> */}
                  </Container>
                  <br />
                  {activeStep == 0 && (
                    <form
                      onSubmit={(e) => {
                        // e.preventDefault();
                        // if (!lot.attachments.pic) {
                        //   setWarning('Image is missing');
                        //   setOpen(true);
                        // } else if (!lot.attachments.video) {
                        //   setWarning('Video is missing');
                        //   setOpen(true);
                        // } else {
                        //   setActiveStep(1);
                        // }
                      }}
                    >
                      <Grid container spacing={2}>
                        {/* <Grid item xs={12}>
                  <Autocomplete
                    options={auctions ?? []}
                    value={lot.auction ?? null}
                    onChange={(e, newValue) =>
                      newValue &&
                      setLot({
                        ...lot,
                        auction: newValue,
                      })
                    }
                    // getOptionLabel={(auction) =>
                    //   auction._id == ''
                    //     ? ''
                    //     : 'Auction ' + auction.auctionNo.toString() + (auction.date ? ' (' + auction.date?.format('DD/MM/YYYY hh:mm A') + ')' : '')
                    // }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Auction"
                        required
                        variant="standard"
                        sx={{
                          background: '#f4f5f4',
                          borderRadius: 50,
                          padding: 2,
                        }}
                      />
                    )}
                  />
                </Grid> */}

                        {/* <Grid item xs={12}>
                  <Autocomplete
                    options={users ?? []}
                    // value={lot.seller ?? null}
                    // onChange={(e, newValue) => newValue && setLot((req) => ({ ...req, seller: newValue }))}
                    getOptionLabel={(user) => user.name}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Seller"
                        variant="standard"
                        required
                        sx={{
                          background: '#f4f5f4',
                          borderRadius: 50,
                          padding: 2,
                        }}
                      />
                    )}
                  />
                </Grid> */}
                        <Grid item xs={12}>
                          <InputBase
                            type="text"
                            value={lot.color}
                            onChange={(e) =>
                              setLot({
                                ...lot,
                                color: e.target.value,
                              })
                            }
                            placeholder="Name"
                            sx={{
                              background: "#f4f5f4",
                              borderRadius: 50,
                              padding: 2,
                            }}
                            disabled={loading}
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <InputBase
                            type="Number"
                            value={lot.color}
                            onChange={(e) =>
                              setLot({
                                ...lot,
                                color: e.target.value,
                              })
                            }
                            placeholder="Phone Number"
                            sx={{
                              background: "#f4f5f4",
                              borderRadius: 50,
                              padding: 2,
                            }}
                            disabled={loading}
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <InputBase
                            type="Email"
                            value={lot.color}
                            onChange={(e) =>
                              setLot({
                                ...lot,
                                color: e.target.value,
                              })
                            }
                            placeholder="Email"
                            sx={{
                              background: "#f4f5f4",
                              borderRadius: 50,
                              padding: 2,
                            }}
                            disabled={loading}
                            fullWidth
                            // required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Autocomplete
                            options={availableSlots ?? []}
                            value={lot.lotNo ?? null}
                            getOptionLabel={(_lot) =>
                              lot.lotNo == -1 ? "" : "Lot #" + _lot
                            }
                            onChange={(e, newValue) =>
                              newValue &&
                              setLot({
                                ...lot,
                                lotNo: newValue,
                              })
                            }
                            // getOptionLabel={(auction) => 'Auction ' + auction.auctionNo.toString()}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Number Of People"
                                required
                                variant="standard"
                                sx={{
                                  background: "#f4f5f4",
                                  borderRadius: 50,
                                  padding: 2,
                                }}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Autocomplete
                            options={availableSlots ?? []}
                            value={lot.lotNo ?? null}
                            getOptionLabel={(_lot) =>
                              lot.lotNo == -1 ? "" : "Lot #" + _lot
                            }
                            onChange={(e, newValue) =>
                              newValue &&
                              setLot({
                                ...lot,
                                lotNo: newValue,
                              })
                            }
                            // getOptionLabel={(auction) => 'Auction ' + auction.auctionNo.toString()}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Do You Want DecorationNo"
                                // required
                                variant="standard"
                                sx={{
                                  background: "#f4f5f4",
                                  borderRadius: 50,
                                  padding: 2,
                                }}
                              />
                            )}
                          />
                        </Grid>
                        <br />
                        <br />

                        <Grid
                          container
                          spacing={2}
                          sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <Grid item xs={12}>
                            <Typography variant="h4">
                              Total Cost: 1599
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="subtitle1">
                              (All taxes included)
                            </Typography>
                          </Grid>
                        </Grid>

                        <Grid item xs={12}>
                         
                            <Button
                            onClick={()=>setStep("4")}
                              type="submit"
                              variant="contained"
                              sx={{
                                mt: 5,
                                borderRadius: 50,
                                padding: 2,
                                marginRight: 2,
                              }}
                              fullWidth
                            >
                              Next
                            </Button>
                        
                        </Grid>
                      </Grid>
                      <br />
                      <br />
                      <br />
                    </form>
                  )}
                </Box>
              </Container>
            </div>
          </>
        )}

        {ShowOtp ? (
           <div
           style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             height: "100vh",
             background: "#FFFCF8",
           }}
         >
           <Card
             sx={{
               background: "white",
               width: "100%",
               height: "80%",
               borderRadius: 4,
               overflow: "scroll",
             }}
           >
             <form
               onSubmit={(e) => {
                 e.preventDefault();
                 // AuthServices.getOTP({ phone })
                 //   .then((res) => {
                 //     setGetOTPResponse(res.data);
                 //   })
                 //   .catch((error) => {
                 //     console.log('error', error);
                 //   });
               }}
             >
               <Link to={'/'}>
               <Button
                 sx={{ mt: 2 }}
                 onClick={() => {
                   setStep(0);
                 }}
               >
                 
                 <ArrowBackIcon />
               </Button>
               </Link>
     
               <Lottie options={otp} height={150} width={150} />
               <Typography
                 variant="h5"
                 sx={{
                   color: "black",
                   textAlign: "center",
                 }}
               >
                 Enter OTP
               </Typography>
               <br />
               {error && (
                 <Typography sx={{ color: "red", ml: 3, textAlign: "left" }}>
                   {error}
                 </Typography>
               )}
     
               <Box sx={{ ml: 8, mr: 8, mt: 2 }}>
                 <InputBase
                   type="number"
                   value={OTP}
                   onChange={(e)=>{
                    setOTP(e.target.value);
                   }}
                   // onChange={(e) => {
                   //   setOTP(e.target.value);
                   //   if (e.target.value.length === 4) {
                   //     // Verify OTP!
                   //     setLoading(true);
                   //     AuthServices.verifyOTP({
                   //       auth_process_id: getOTPResponse?.auth_process_id as string,
                   //       OTP: e.target.value,
                   //     })
                   //       .then((res) => {
                   //         setLoading(false);
                   //         console.log(res);
                   //         if (res.data.isExistingUser) {
                   //           // handle that case
                   //           localStorage.setItem('authUser', JSON.stringify(res.data.user));
                   //           localStorage.setItem('userToken', res.data.authToken as string);
                   //           auth.setUser(res.data.user as IUser);
                   //           navigate('/');
                   //         } else {
                   //           setCreateUserRequest((req) => ({
                   //             ...req,
                   //             tempAuthToken: res.data.tempAuthToken as string,
                   //           }));
                   //           setStep(2);
                   //         }
                   //       })
                   //       .catch((error) => {
                   //         setLoading(false);
                   //         console.log(error);
                   //         setError(error.message);
                   //       });
                   //   }
                   // }}
                   placeholder="XXXX"
                   sx={{
                     background: "#f4f5f4",
                     borderRadius: 50,
                     padding: 1,
                     paddingLeft: 4,
                     latterSpacing: 10,
                     textAlign: "center",
                     fontWeight: "bold",
                   }}
                   inputProps={{
                     maxLength: 4,
                     style: { letterSpacing: 40, textAlign: "center" },
                   }}
                   disabled={loading}
                   fullWidth
                 />
               </Box>
               <div style={{ textAlign: "center", marginRight: 5 }}>
                 <br />
                 <br />
                 Didn't receive ?
                 <Button
                   type="submit"
                   sx={{ color: "#384971" }}
                   // onClick={() => {
                   //   setOTP('');
                   // }}
                 >
                   Resend OTP
                 </Button>
               </div>
             </form>
             <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Button
               className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                // onClick={() => {
        
                  onClick={onOTPVerify}
                // }}
                variant="contained"
                color="primary"
                
              >
              {loading && (
                 <CircularProgress sx={{ height:'15%'}} color="secondary" />
                  )}

                Verify Otp
              </Button>
            </Grid>
           </Card>
         </div>
        ):(
          // <>
          //   <div>
          //     <Container>
          //       {/* <h2 style={{ textAlign: 'center' }}>Add New Lot</h2> */}
          //       <br />
          //       <Box sx={{ width: "100%", typography: "body1" }}>
          //         <Container maxWidth="sm">
          //           <Grid container spacing={2}>
          //             <Grid item xs={12}>
          //               <Typography variant="h4">Standard Theatre</Typography>
          //             </Grid>
          //             <Grid item xs={6}>
          //               <Typography variant="subtitle1">
          //                 <CalendarMonthIcon /> Date: 14/12/2023
          //               </Typography>
          //             </Grid>
          //             <Grid item xs={6}>
          //               <Typography variant="subtitle1">
          //                 <AccessTimeIcon /> Time: 10:00 PM - 1:00 AM
          //               </Typography>
          //             </Grid>
          //           </Grid>

          //           {/* <Stepper activeStep={activeStep}>
          //     <Step>
          //       <StepLabel>Basic</StepLabel>
          //     </Step>
          //     <Step>
          //       <StepLabel>Quality</StepLabel>
          //     </Step>
          //   </Stepper> */}
          //         </Container>
          //         <br />
          //         {activeStep == 0 && (
          //           <form
          //             onSubmit={(e) => {
          //               // e.preventDefault();
          //               // if (!lot.attachments.pic) {
          //               //   setWarning('Image is missing');
          //               //   setOpen(true);
          //               // } else if (!lot.attachments.video) {
          //               //   setWarning('Video is missing');
          //               //   setOpen(true);
          //               // } else {
          //               //   setActiveStep(1);
          //               // }
          //             }}
          //           >
          //             <Grid container spacing={2}>
          //               {/* <Grid item xs={12}>
          //         <Autocomplete
          //           options={auctions ?? []}
          //           value={lot.auction ?? null}
          //           onChange={(e, newValue) =>
          //             newValue &&
          //             setLot({
          //               ...lot,
          //               auction: newValue,
          //             })
          //           }
          //           // getOptionLabel={(auction) =>
          //           //   auction._id == ''
          //           //     ? ''
          //           //     : 'Auction ' + auction.auctionNo.toString() + (auction.date ? ' (' + auction.date?.format('DD/MM/YYYY hh:mm A') + ')' : '')
          //           // }
          //           renderInput={(params) => (
          //             <TextField
          //               {...params}
          //               placeholder="Auction"
          //               required
          //               variant="standard"
          //               sx={{
          //                 background: '#f4f5f4',
          //                 borderRadius: 50,
          //                 padding: 2,
          //               }}
          //             />
          //           )}
          //         />
          //       </Grid> */}

          //               {/* <Grid item xs={12}>
          //         <Autocomplete
          //           options={users ?? []}
          //           // value={lot.seller ?? null}
          //           // onChange={(e, newValue) => newValue && setLot((req) => ({ ...req, seller: newValue }))}
          //           getOptionLabel={(user) => user.name}
          //           renderInput={(params) => (
          //             <TextField
          //               {...params}
          //               placeholder="Seller"
          //               variant="standard"
          //               required
          //               sx={{
          //                 background: '#f4f5f4',
          //                 borderRadius: 50,
          //                 padding: 2,
          //               }}
          //             />
          //           )}
          //         />
          //       </Grid> */}
          //               <Grid item xs={12}>
          //                 <InputBase
          //                   type="text"
          //                   value={lot.color}
          //                   onChange={(e) =>
          //                     setLot({
          //                       ...lot,
          //                       color: e.target.value,
          //                     })
          //                   }
          //                   placeholder="Name"
          //                   sx={{
          //                     background: "#f4f5f4",
          //                     borderRadius: 50,
          //                     padding: 2,
          //                   }}
          //                   disabled={loading}
          //                   fullWidth
          //                   required
          //                 />
          //               </Grid>
          //               <Grid item xs={12}>
          //                 <InputBase
          //                   type="Number"
          //                   value={lot.color}
          //                   onChange={(e) =>
          //                     setLot({
          //                       ...lot,
          //                       color: e.target.value,
          //                     })
          //                   }
          //                   placeholder="Phone Number"
          //                   sx={{
          //                     background: "#f4f5f4",
          //                     borderRadius: 50,
          //                     padding: 2,
          //                   }}
          //                   disabled={loading}
          //                   fullWidth
          //                   required
          //                 />
          //               </Grid>
          //               <Grid item xs={12}>
          //                 <InputBase
          //                   type="Email"
          //                   value={lot.color}
          //                   onChange={(e) =>
          //                     setLot({
          //                       ...lot,
          //                       color: e.target.value,
          //                     })
          //                   }
          //                   placeholder="Email"
          //                   sx={{
          //                     background: "#f4f5f4",
          //                     borderRadius: 50,
          //                     padding: 2,
          //                   }}
          //                   disabled={loading}
          //                   fullWidth
          //                   // required
          //                 />
          //               </Grid>
          //               <Grid item xs={12}>
          //                 <Autocomplete
          //                   options={availableSlots ?? []}
          //                   value={lot.lotNo ?? null}
          //                   getOptionLabel={(_lot) =>
          //                     lot.lotNo == -1 ? "" : "Lot #" + _lot
          //                   }
          //                   onChange={(e, newValue) =>
          //                     newValue &&
          //                     setLot({
          //                       ...lot,
          //                       lotNo: newValue,
          //                     })
          //                   }
          //                   // getOptionLabel={(auction) => 'Auction ' + auction.auctionNo.toString()}
          //                   renderInput={(params) => (
          //                     <TextField
          //                       {...params}
          //                       placeholder="Number Of People"
          //                       required
          //                       variant="standard"
          //                       sx={{
          //                         background: "#f4f5f4",
          //                         borderRadius: 50,
          //                         padding: 2,
          //                       }}
          //                     />
          //                   )}
          //                 />
          //               </Grid>
          //               <Grid item xs={12}>
          //                 <Autocomplete
          //                   options={availableSlots ?? []}
          //                   value={lot.lotNo ?? null}
          //                   getOptionLabel={(_lot) =>
          //                     lot.lotNo == -1 ? "" : "Lot #" + _lot
          //                   }
          //                   onChange={(e, newValue) =>
          //                     newValue &&
          //                     setLot({
          //                       ...lot,
          //                       lotNo: newValue,
          //                     })
          //                   }
          //                   // getOptionLabel={(auction) => 'Auction ' + auction.auctionNo.toString()}
          //                   renderInput={(params) => (
          //                     <TextField
          //                       {...params}
          //                       placeholder="Do You Want DecorationNo"
          //                       // required
          //                       variant="standard"
          //                       sx={{
          //                         background: "#f4f5f4",
          //                         borderRadius: 50,
          //                         padding: 2,
          //                       }}
          //                     />
          //                   )}
          //                 />
          //               </Grid>
          //               <br />
          //               <br />

          //               <Grid
          //                 container
          //                 spacing={2}
          //                 sx={{
          //                   alignItems: "center",
          //                   justifyContent: "center",
          //                   textAlign: "center",
          //                 }}
          //               >
          //                 <Grid item xs={12}>
          //                   <Typography variant="h4">
          //                     Total Cost: 1599
          //                   </Typography>
          //                 </Grid>
          //                 <Grid item xs={12}>
          //                   <Typography variant="subtitle1">
          //                     (All taxes included)
          //                   </Typography>
          //                 </Grid>
          //               </Grid>

          //               <Grid item xs={12}>
                         
          //                   <Button
          //                   onClick={()=>setStep("4")}
          //                     type="submit"
          //                     variant="contained"
          //                     sx={{
          //                       mt: 5,
          //                       borderRadius: 50,
          //                       padding: 2,
          //                       marginRight: 2,
          //                     }}
          //                     fullWidth
          //                   >
          //                     Next
          //                   </Button>
                        
          //               </Grid>
          //             </Grid>
          //             <br />
          //             <br />
          //             <br />
          //           </form>
          //         )}
          //       </Box>
          //     </Container>
          //   </div>
          // </>
          <>
          </>
        )}
        {user ? (
          <Card
            sx={{
              background: "white",
              width: "90%",
              height: "80%",
              borderRadius: 4,
              overflow: "scroll",
            }}
          >
            <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Typography variant="h5">Terms and conditions</Typography>
            </Grid>
            <Link to={"/"}>
              <Button
                sx={{ mt: 2 }}
                onClick={() => {
                  setStep(0);
                }}
              >
                <ArrowBackIcon />
              </Button>
            </Link>
            <Container></Container>

            <Box sx={{ ml: 8, mr: 8, mt: 2 }}></Box>

            <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <br />

              <Button
                onClick={checkOutHandle}
                variant="contained"
                color="primary"
              >
                Book Bow
              </Button>
            </Grid>
          </Card>
        ):(
          <>
         {/* <div
           style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             height: "100vh",
             background: "#FFFCF8",
           }}
         >
           <Card
             sx={{
               background: "white",
               width: "80%",
               height: "70%",
               borderRadius: 4,
               overflow: "scroll",
             }}
           >
             <form
               onSubmit={(e) => {
                 e.preventDefault();
                 // AuthServices.getOTP({ phone })
                 //   .then((res) => {
                 //     setGetOTPResponse(res.data);
                 //   })
                 //   .catch((error) => {
                 //     console.log('error', error);
                 //   });
               }}
             >
               <Link to={'/'}>
               <Button
                 sx={{ mt: 2 }}
                 onClick={() => {
                   setStep(0);
                 }}
               >
                 
                 <ArrowBackIcon />
               </Button>
               </Link>
     
               <Lottie options={otp} height={150} width={150} />
               <Typography
                 variant="h5"
                 sx={{
                   color: "black",
                   textAlign: "center",
                 }}
               >
                 Enter OTP
               </Typography>
               <br />
               {error && (
                 <Typography sx={{ color: "red", ml: 3, textAlign: "left" }}>
                   {error}
                 </Typography>
               )}
     
               <Box sx={{ ml: 8, mr: 8, mt: 2 }}>
                 <InputBase
                   type="number"
                   value={OTP}
                   onChange={(e)=>{
                    setOTP(e.target.value);
                   }}
                   // onChange={(e) => {
                   //   setOTP(e.target.value);
                   //   if (e.target.value.length === 4) {
                   //     // Verify OTP!
                   //     setLoading(true);
                   //     AuthServices.verifyOTP({
                   //       auth_process_id: getOTPResponse?.auth_process_id as string,
                   //       OTP: e.target.value,
                   //     })
                   //       .then((res) => {
                   //         setLoading(false);
                   //         console.log(res);
                   //         if (res.data.isExistingUser) {
                   //           // handle that case
                   //           localStorage.setItem('authUser', JSON.stringify(res.data.user));
                   //           localStorage.setItem('userToken', res.data.authToken as string);
                   //           auth.setUser(res.data.user as IUser);
                   //           navigate('/');
                   //         } else {
                   //           setCreateUserRequest((req) => ({
                   //             ...req,
                   //             tempAuthToken: res.data.tempAuthToken as string,
                   //           }));
                   //           setStep(2);
                   //         }
                   //       })
                   //       .catch((error) => {
                   //         setLoading(false);
                   //         console.log(error);
                   //         setError(error.message);
                   //       });
                   //   }
                   // }}
                   placeholder="XXXX"
                   sx={{
                     background: "#f4f5f4",
                     borderRadius: 50,
                     padding: 1,
                     paddingLeft: 4,
                     latterSpacing: 10,
                     textAlign: "center",
                     fontWeight: "bold",
                   }}
                   inputProps={{
                     maxLength: 4,
                     style: { letterSpacing: 40, textAlign: "center" },
                   }}
                   disabled={loading}
                   fullWidth
                 />
               </Box>
               <div style={{ textAlign: "center", marginRight: 5 }}>
                 <br />
                 <br />
                 Didn't receive ?
                 <Button
                   type="submit"
                   sx={{ color: "#384971" }}
                   // onClick={() => {
                   //   setOTP('');
                   // }}
                 >
                   Resend OTP
                 </Button>
               </div>
             </form>
             <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Button
               className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                // onClick={() => {
        
                  onClick={onOTPVerify}
                // }}
                variant="contained"
                color="primary"
                
              >
              <CgSpinner size={20} className="mt-1 animate-spin" />

                Verify Otp
              </Button>
            </Grid>
           </Card>
         </div> */}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DecorationDetails;
