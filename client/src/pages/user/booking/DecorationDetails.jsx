import {
  Autocomplete,
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  Grid,
  InputBase,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import PhoneInput from "react-phone-input-2";
import { auth } from "../../../firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { amountContext } from "../../../common/ContextApi";
import axios from "axios";

// import firebase from 'firebase/app';

function DecorationDetails() {
  const [checkBok, setCheckBox] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  // const [bookingDetails.type, setSelectedOption] = useState(null);
  // const [bookingDetails.cake , setSelecteCake] = useState(null);
  const [discordChecked, setDiscordChecked] = useState(true);
  const [framerChecked, setFramerChecked] = useState(true);
  const [price, setPrice] = useState("1000");
  const [key, setKey] = useState(null);
  const [step, setStep] = useState("0");
  const [order, setOrder] = useState("0");
  const { amount, setAmount } = useContext(amountContext);
  const { evType, setEvType, tName, setTname } = useContext(amountContext);
  const [OTP, setOTP] = useState("");
  const [ph, setPh] = useState("");
  const [ShowOtp, setSHowOtp] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  // const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);
  const { date, slot } = useParams();
  console.log(slot);
  const otp = {
    loop: true,
    autoplay: true,
    animationData: enterOtp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // console.log(selectedOption);
  const availableSlots = [1, 2, 3, 4, 5];
  const decorationWant = ["Yes", "No"];
  const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [auctions, setAuctions] = useState(null);
  // const [availableSlots, setAvailableSlots] = useState(1, 2, 3);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({
    slot: slot,
    theater: tName,
    bookedDate: date,
    amount: amount,
    cake: [],
    type: evType,
    namingDetails: {
      name: "",
      partnerName: "",
      singleName: "",
    },
    userDetails: {
      userName: "",
      phone: "",
      numberOfPeoples: "",
    },
    adons: [],
    ledName: "",
    ledNo: null,
    musicLink: "",
  });
  console.log(amount, "s");
  // useEffect(async ()=>{
  //  await axios
  //   .post("/book", {bookingDetails })
  //   .then((res) => {
  //     console.log(res.data, "fromdata");
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // },[])

  // const [showOTP, setShowOTP] = useState(false);
  // const [user, setUser] = useState(null);
  const [loading2, setLoading2] = useState(false);

  // console.log({ value }, { slot });
  const handleOptionSelect = (option) => {
    // setSelectedOption(option);
    setBookingDetails((prevBookingDetails) => ({
      ...prevBookingDetails, // Copy the existing state
      type: option, // Update the specific field
    }));
  };
  const handleCakeSelect = (option) => {
    console.log("Current amount:", amount);
    console.log(option);

    // Check if the option is already selected
    if (bookingDetails.cake.includes(option)) {
      // If selected, remove it from the array and subtract its amount
      setBookingDetails((prev) => ({
        ...prev,
        cake: prev.cake.filter((item) => item !== option),
      }));
      updateAmount(option, "subtract");
    } else {
      // If not selected, add it to the array and add its amount
      setBookingDetails((prev) => ({
        ...prev,
        cake: [...prev.cake, option],
      }));
      updateAmountt(option, "add");
    }
  };
  
  const updateAmountt = (option, action) => {
    // Define the amount for each option
    const amountMap = {
      Cake1: 200,
      Cake2: 50,
      Cake3: 100,
      Cake4: 250,
      Cake5: 250,
      Cake6: 550,
      Cake7: 600,
      Cake8:800,
      // Add more options as needed
    };
  
    // Calculate the amount based on the action (add or subtract)
    const optionAmount = amountMap[option];
    const updatedAmount =
      action === "add" ? amount + optionAmount : amount - optionAmount;

    // Update the total amount
    setAmount(updatedAmount);
  };

  const getPriceForOption = (option) => {
    switch (option) {
      case "Cake1":
        return 100;
      case "Cake2":
        return 100;
      case "Cake3":
        return 100;
      case "Cake4":
        return 100;
      case "Cake5":
        return 100;
      case "Cake6":
        return 699;
      case "Cake7":
        return 488;
      case "Cake8":
        return 1;
      default:
        return 0;
    }
  };

  const handleExtraDec = (option) => {
    console.log("Current selected options:", bookingDetails.adons);
    console.log("Option selected:", option);

    // Check if the option is already selected
    if (bookingDetails.adons.includes(option)) {
      // If selected, remove it from the array and subtract its amount
      setBookingDetails((prev) => ({
        ...prev,
        adons: prev.adons.filter((item) => item !== option),
      }));
      updateAmount(option, "subtract");
    } else {
      // If not selected, add it to the array and add its amount
      setBookingDetails((prev) => ({
        ...prev,
        adons: [...prev.adons, option],
      }));
      updateAmount(option, "add");
    }
  };

  const updateAmount = (option, action) => {
    // Define the amount for each option
    const amountMap = {
      LedName: 200,
      LedNumber: 50,
      TblDec: 100,
      Photography: 250,
      VideoEdting: 250,
      Bouquet: 550,
      FogEntry: 600,
      EntryMusic: 0,
      // Add more options as needed
    };

    // Calculate the amount based on the action (add or subtract)
    const optionAmount = amountMap[option];
    const updatedAmount =
      action === "add" ? amount + optionAmount : amount - optionAmount;

    // Update the total amount
    setAmount(updatedAmount);
  };

  const data = {
    name: "shibin",
    amount: 1,
    number: "7034928633",
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };
  const handlePayment = (e) => {
    e.preventDefault();
    setLoading2(true);
    axios
      .post("/payment", { ...data })
      .then((res) => {
        console.log(res.data.data, "fromdata");
        // window.location.href=res.data.data

        setTimeout(() => {
          setLoading2(false);
        }, 1500);
      })
      .catch((error) => {
        setLoading2(false);
        console.error(error);
      });
  };
  const handleBook = async (e) => {
    BookingService.Book(bookingDetails).then((res) => {
      console.log(res.data);
    });
    // await axios
    //     .post("/bookNow", { data })
    //     .then((res) => {
    //       console.log(res.data, "fromdata");
    //     })
    // .catch((error) => {
    //   console.error(error);
    // });
  };

  const initiatePaytmPayment = (orderID, checksum) => {
    console.log("inn");
    const paytmURL = `https://securegw.paytm.in/theia/processTransaction?ORDER_ID=${orderID}&CHECKSUMHASH=${checksum}`;
    // Redirect the user to the Paytm payment gateway
    window.location.href = paytmURL;
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
        }
      );
    }
  }

  function onSignup() {
    event.preventDefault();
    setLoading(true);

    console.log("here");
    onCaptchVerify();
    console.log("bot");

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+91" + bookingDetails.userDetails.phone;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult, "confirmationResult");
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setStep(null);
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
    console.log({ OTP });
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
      {/* <h1>{bookingDetails.type}</h1> */}
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
        {/* {step === "0" && (
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
              <Typography variant="h5">Choose Your Special Occasion</Typography>
            </Grid>
            <Link to={"/"}>
              <Button
                sx={{ mt: 2 }}
                onClick={() => {
                  // setStep(1);
                }}
              >
                <ArrowBackIcon />
              </Button>
            </Link>
            <Container sx={{ alignItems: "center", justifyContent: "center" }}>
               

           
            </Container>

            <Box sx={{ ml: 8, mr: 8, mt: 2 }}></Box>

            <Container>
              <Grid
                container
                alignContent={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                {(bookingDetails.type === "Birthday") |
                (bookingDetails.type === "Baby Shower") ? (
                  <div>
                    <Grid item xs={12}>
                      <InputLabel>
                        {bookingDetails.type === "Birthday"
                          ? "Nick name of birthday person"
                          : "Baby Shower"}
                      </InputLabel>
                      <InputBase
                        type="Text"
                        value={bookingDetails.namingDetails.singleName}
                        onChange={(e) =>
                          setBookingDetails({
                            ...bookingDetails,
                            namingDetails: {
                              ...bookingDetails.namingDetails,
                              singleName: e.target.value,
                            },
                          })
                        }
                        placeholder="Name"
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
                        value={bookingDetails.namingDetails.name}
                        onChange={(e) =>
                          setBookingDetails({
                            ...bookingDetails,
                            namingDetails: {
                              ...bookingDetails.namingDetails,
                              name: e.target.value,
                            },
                          })
                        }
                        placeholder="Your NickName"
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
                        value={bookingDetails.namingDetails.partnerName}
                        onChange={(e) =>
                          setBookingDetails({
                            ...bookingDetails,
                            namingDetails: {
                              ...bookingDetails.namingDetails,
                              partnerName: e.target.value,
                            },
                          })
                        }
                        placeholder="Partner's NickName"
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
              <Grid item sx={6}>
                <Typography variant="h5">Total Cost: {amount}</Typography>
              </Grid>
             
              <br />
            </Grid>

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
        )} */}
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
              <Typography variant="h5">Select Cake</Typography>
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
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                {/* <Grid item xs={6} sm={6} md={4}>
                  <label>
                    <Checkbox
                      type="radio"
                      name="options"
                      value="Cake1"
                      // onClick={() => setAmount(0)}
                      // onClick={ setAmount((prevAmount) => prevAmount + 500)}
                      checked={bookingDetails.cake === "Cake1"}
                      onChange={() => handleCakeSelect("Cake1")}
                    />

                    <img
                      style={{
                        width: "30%",
                        borderRadius: "50%",
                        height: "45%",
                      }}
                      src="/product-jpeg.jpg"
                      alt=""
                    />
                    <Typography
                      color={"orange"}
                      fontWeight={"600"}
                      paddingLeft={"24%"}
                      paddingTop={"6px"}
                    >
                      Cake
                    </Typography>
                  </label>
                  <Typography
                    paddingLeft={"20%"}
                    paddingTop={"5px"}
                    variant="h6"
                  >
                    ₹ 699
                  </Typography>
                </Grid> */}
                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.cake.includes("Cake1")}
                      onChange={() => handleCakeSelect("Cake1")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Red Velvet cake</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 699
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.cake.includes("Cake2")}
                      onChange={() => handleCakeSelect("Cake2")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Carrot Cake</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 699
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.cake.includes("Cake3")}
                      onChange={() => handleCakeSelect("Cake3")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Lemon cake</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 699
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.cake.includes("Cake4")}
                      onChange={() => handleCakeSelect("Cake4")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">BirthDay</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 699
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.cake.includes("Cake5")}
                      onChange={() => handleCakeSelect("Cake5")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">BirthDay</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 699
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.cake.includes("Cake6")}
                      onChange={() => handleCakeSelect("Cake6")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Vanila Cake</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 699
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.cake.includes("Cake7")}
                      onChange={() => handleCakeSelect("Cake7")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Rainbow cake</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 699
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.cake.includes("Cake8")}
                      onChange={() => handleCakeSelect("Cake8")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Chocolate Cake</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 699
                      </Typography>
                    </span>
                  </label>
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
                <Typography variant="h5">Total Cost: {amount}</Typography>
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
              <Typography style={{ textDecoration: "underline" }} variant="h5">
                ADDONS
              </Typography>
              <br />
              <Typography variant="h6">(Optional)</Typography>
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
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.adons.includes("LedName")}
                      onChange={() => handleExtraDec("LedName")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="/LED Name 200 for 5 lattar_.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">LED Name</h3>
                      {bookingDetails.adons.includes("LedName") && (
                        <>
                          <Grid item xs={12}>
                            <InputLabel>Name</InputLabel>
                            <InputBase
                              type="Text"
                              value={bookingDetails.l}
                              onChange={(e) =>
                                setBookingDetails({
                                  ...bookingDetails,
                                  ledName: e.target.value,
                                })
                              }
                              placeholder="Name"
                              sx={{
                                background: "#f4f5f4",
                                borderRadius: 50,
                                // width:'100%',

                                padding: 2,
                              }}
                              // disabled={loading}
                              // fullWidth
                              width={"30px"}
                              required
                            />
                          </Grid>
                          <p style={{ color: "red" }}>5 Letters ₹150</p>
                        </>
                      )}
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 150
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.adons.includes("LedNumber")}
                      onChange={() => handleExtraDec("LedNumber")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="/led number Rs 50.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Led Numbers</h3>
                      {bookingDetails.adons.includes("LedNumber") && (
                        <>
                          <Grid item xs={12}>
                            <InputLabel>Age</InputLabel>
                            <InputBase
                              type="num"
                              value={bookingDetails.ledNo}
                              onChange={(e) =>
                                setBookingDetails({
                                  ...bookingDetails,
                                    ledNo: e.target.value,
                                  
                                })
                              }
                              placeholder="Age"
                              sx={{
                                background: "#f4f5f4",
                                borderRadius: 50,
                                // width:'100%',

                                padding: 2,
                              }}
                              // disabled={loading}
                              // fullWidth
                              width={"30px"}
                              required
                            />
                          </Grid>
                          {/* <p style={{ color: "red" }}>
                            only take 8 latter name
                          </p> */}
                        </>
                      )}
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 50
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.adons.includes("TblDec")}
                      onChange={() => handleExtraDec("TblDec")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="/TABLE DECOR 100.png"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Table Heart</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 100
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.adons.includes("Photography")}
                      onChange={() => handleExtraDec("Photography")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="/photography 250.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Photography</h3>
                      {bookingDetails.adons.includes("Photography") && (
                        <>
                          {/* <p style={{ color: "red" }}>
                            Aron for sale
                          </p> */}
                          <ul style={{ color: "red" }}>
                            <li>15 mint</li>
                          </ul>
                        </>
                      )}
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 250
                      </Typography>
                    </span>
                  </label>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.adons.includes("VideoEdting")}
                      onChange={() => handleExtraDec("VideoEdting")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="/video editing 250.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Video Editing</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 250
                      </Typography>
                    </span>
                  </label>
                </Grid>

                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.adons.includes("Bouquet")}
                      onChange={() => handleExtraDec("Bouquet")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="/bouquet 550 (1).png"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Bouquet</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 550
                      </Typography>
                    </span>
                  </label>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.adons.includes("FogEntry")}
                      onChange={() => handleExtraDec("FogEntry")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="/fogg.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Fog Entry</h3>
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        ₹ 600
                      </Typography>
                    </span>
                  </label>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={2}
                  style={{
                    // border: `2px solid ${discordChecked ? "black" : "black"}`,
                    display: "inline-block",
                    margin: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                    position: "relative", // Add position relative to the container
                    overflow: "hidden", // Hide the checkbox overflow
                    backgroundColor: discordChecked ? "#FFFCF8" : "white", // Optional background color change
                    transition: "border 0.3s, background-color 0.3s",
                  }}
                >
                  <label
                    style={{
                      // display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "5px",
                        left: "5px",
                        cursor: "pointer",
                      }}
                      checked={bookingDetails.adons.includes("EntryMusic")}
                      onChange={() => handleExtraDec("EntryMusic")}
                    />
                    <span
                      className="checkbox-tile"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="checkbox-icon"
                        style={{ marginBottom: "5px" }}
                      >
                        <br />
                        <br />
                      </span>
                      <img
                        style={{
                          width: "70%",
                          borderRadius: "10%",
                          height: "45%",
                        }}
                        src="/fogg.jpg"
                        alt=""
                      />
                      {/* Uncomment the line below if you want to add a label */}
                      <h3 className="checkbox-label">Entry Music</h3>
                      {bookingDetails.adons.includes("EntryMusic") && (
                        <>
                          <Grid item xs={12}>
                            <InputLabel>Song Link</InputLabel>
                            <InputBase
                              type="Text"
                              value={bookingDetails.musicLink}
                              onChange={(e) =>
                                setBookingDetails({
                                    musicLink: e.target.value,
                                })
                              }
                              placeholder="Link"
                              sx={{
                                background: "#f4f5f4",
                                borderRadius: 50,
                                // width:'100%',

                                padding: 2,
                              }}
                              // disabled={loading}
                              // fullWidth
                              width={"30px"}
                              required
                            />
                          </Grid>
                          <p style={{ color: "red" }}>
                            Give any you tube video link
                          </p>
                        </>
                      )}
                      <Typography
                        paddingLeft={"20%"}
                        paddingTop={"5px"}
                        variant="h6"
                      >
                        Free
                      </Typography>
                    </span>
                  </label>
                </Grid>
              </Grid>
            </Container>

            {/* <Container>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4}>
                  <label>
                    <Checkbox
                      type="radio"
                      name="options"
                      value="Cake1"
                      // onClick={() => setAmount(0)}
                      // onClick={ setAmount((prevAmount) => prevAmount + 500)}
                      // checked={bookingDetails.cake === "Cake1"}
                      // onChange={() => handleCakeSelect("Cake1")}
                    />

                    <img
                      style={{
                        width: "30%",
                        borderRadius: "50%",
                        height: "45%",
                      }}
                      src="/product-jpeg.jpg"
                      alt=""
                    />
                    <Typography
                      color={"orange"}
                      fontWeight={"600"}
                      paddingLeft={"24%"}
                      paddingTop={"6px"}
                    >
                      Rose Heart
                    </Typography>
                  </label>
                  <Typography
                    paddingLeft={"20%"}
                    paddingTop={"5px"}
                    variant="h6"
                  >
                    ₹ 699
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <label>
                    <Checkbox
                      type="radio"
                      name="options"
                      value="Cake2"
                      // checked={bookingDetails.cake === "Cake2"}
                      // onChange={() => handleCakeSelect("Cake2")}
                    />
                    <img
                      style={{
                        width: "30%",
                        borderRadius: "50%",
                        height: "45%",
                      }}
                      src="/product-jpeg.jpg"
                      alt=""
                    />
                    <Typography
                      color={"orange"}
                      fontWeight={"600"}
                      paddingLeft={"24%"}
                      paddingTop={"6px"}
                    >
                      Rose Heart
                    </Typography>
                    <Typography
                      paddingLeft={"20%"}
                      paddingTop={"5px"}
                      variant="h6"
                    >
                      ₹ 699
                    </Typography>
                  </label>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <label>
                    <Checkbox
                      type="radio"
                      name="options"
                      value="Cake3"
                      // checked={bookingDetails.cake === "Cake3"}
                      // onChange={() => handleCakeSelect("Cake3")}
                    />
                    <img
                      style={{
                        width: "30%",
                        borderRadius: "50%",
                        height: "45%",
                      }}
                      src="/product-jpeg.jpg"
                      alt=""
                    />
                    <Typography
                      color={"orange"}
                      fontWeight={"600"}
                      paddingLeft={"24%"}
                      paddingTop={"6px"}
                    >
                      Rose Heart
                    </Typography>
                    <Typography
                      paddingLeft={"20%"}
                      paddingTop={"5px"}
                      variant="h6"
                    >
                      ₹ 699
                    </Typography>
                  </label>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <label>
                    <Checkbox
                      type="radio"
                      name="options"
                      value="Cake3"
                      // checked={bookingDetails.cake === "Cake3"}
                      // onChange={() => handleCakeSelect("Cake3")}
                    />
                    <img
                      style={{
                        width: "30%",
                        borderRadius: "50%",
                        height: "45%",
                      }}
                      src="/product-jpeg.jpg"
                      alt=""
                    />
                    <Typography
                      color={"orange"}
                      fontWeight={"600"}
                      paddingLeft={"24%"}
                      paddingTop={"6px"}
                    >
                      Rose Heart
                    </Typography>
                    <Typography
                      paddingLeft={"20%"}
                      paddingTop={"5px"}
                      variant="h6"
                    >
                      ₹ 699
                    </Typography>
                  </label>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <label>
                    <Checkbox
                      type="radio"
                      name="options"
                      value="Cake3"
                      // checked={bookingDetails.cake === "Cake3"}
                      // onChange={() => handleCakeSelect("Cake3")}
                    />
                    <img
                      style={{
                        width: "30%",
                        borderRadius: "50%",
                        height: "45%",
                      }}
                      src="/product-jpeg.jpg"
                      alt=""
                    />
                    <Typography
                      color={"orange"}
                      fontWeight={"600"}
                      paddingLeft={"24%"}
                      paddingTop={"6px"}
                    >
                      Rose Heart
                    </Typography>
                    <Typography
                      paddingLeft={"20%"}
                      paddingTop={"5px"}
                      variant="h6"
                    >
                      ₹ 699
                    </Typography>
                  </label>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <label>
                    <Checkbox
                      type="radio"
                      name="options"
                      value="Cake3"
                      // checked={bookingDetails.cake === "Cake3"}
                      // onChange={() => handleCakeSelect("Cake3")}
                    />
                    <img
                      style={{
                        width: "30%",
                        borderRadius: "50%",
                        height: "45%",
                      }}
                      src="/product-jpeg.jpg"
                      alt=""
                    />
                    <Typography
                      color={"orange"}
                      fontWeight={"600"}
                      paddingLeft={"24%"}
                      paddingTop={"6px"}
                    >
                      Rose Heart
                    </Typography>
                    <Typography
                      paddingLeft={"20%"}
                      paddingTop={"5px"}
                      variant="h6"
                    >
                      ₹ 699
                    </Typography>
                  </label>
                </Grid>
                <Grid></Grid>
              </Grid>
            </Container> */}

            <Box sx={{ ml: 8, mr: 8, mt: 2 }}></Box>
            <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
              fontSize={""}
            >
              <Grid item sx={6}>
                <Typography variant="h5">Total Cost: {amount}</Typography>
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
                  setStep("3");
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
                        <Typography variant="h4">{tName}</Typography>
                      </Grid>
                      <Button
                        onClick={handleBook}
                        variant="contained"
                        color="primary"
                      >
                        Book
                      </Button>
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
                        <Grid item xs={12}>
                          <InputBase
                            type="text"
                            value={bookingDetails.userDetails.userName}
                            onChange={(e) =>
                              setBookingDetails({
                                ...bookingDetails,
                                userDetails: {
                                  ...bookingDetails.userDetails,
                                  userName: e.target.value,
                                },
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
                          <InputBase
                            placeholder="Whats App Number"
                            value={bookingDetails?.userDetails?.phone || ""}
                            onChange={(e) =>
                              setBookingDetails({
                                ...bookingDetails,
                                userDetails: {
                                  ...bookingDetails.userDetails,
                                  phone: e.target.value,
                                },
                              })
                            }
                            sx={{
                              background: "#f4f5f4",
                              borderRadius: 50,
                              padding: 2,
                            }}
                            disabled={loading}
                            fullWidth
                          />
                          <Grid sx={{paddingLeft:"15px",color:'red'}}>

                            <p>You will get a otp to this number</p>
                          </Grid>
                        </Grid>
                      
                        <br />
                        <br />
                        <Container>
                          <Grid
                            container
                            alignContent={"start"}
                            justifyContent={"start"}
                            display={"flex"}
                          >
                            {bookingDetails.type === "BirthDay" ? (
                              <div>
                                <Grid item xs={12}>
                                  <InputLabel>
                                    {bookingDetails.type === "BirthDay"
                                      ? "Nick name of birthday person"
                                      : "Baby Shower"}
                                  </InputLabel>
                                  <InputBase
                                    type="Text"
                                    value={
                                      bookingDetails.namingDetails.singleName
                                    }
                                    onChange={(e) =>
                                      setBookingDetails({
                                        ...bookingDetails,
                                        namingDetails: {
                                          ...bookingDetails.namingDetails,
                                          singleName: e.target.value,
                                        },
                                      })
                                    }
                                    placeholder="Name"
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
                                    value={bookingDetails.namingDetails.name}
                                    onChange={(e) =>
                                      setBookingDetails({
                                        ...bookingDetails,
                                        namingDetails: {
                                          ...bookingDetails.namingDetails,
                                          name: e.target.value,
                                        },
                                      })
                                    }
                                    placeholder="Your NickName"
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
                                    value={
                                      bookingDetails.namingDetails.partnerName
                                    }
                                    onChange={(e) =>
                                      setBookingDetails({
                                        ...bookingDetails,
                                        namingDetails: {
                                          ...bookingDetails.namingDetails,
                                          partnerName: e.target.value,
                                        },
                                      })
                                    }
                                    placeholder="Partner's NickName"
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
                                </Grid>
                              </div>
                            )}
                            <br />
                            <br />
                          </Grid>
                          <br />
                          <br />
                        </Container>
                        {/* <Grid item xs={12}>
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
                        </Grid> */}

                        {/* <Grid item xs={12}>
                          <Autocomplete
                            options={decorationWant}
                            value={bookingDetails?.userDetails?.wantDec || null}
                            onChange={(e, newValue) =>
                              setBookingDetails({
                                ...bookingDetails,
                                userDetails: {
                                  ...bookingDetails.userDetails,
                                  wantDec: newValue,
                                },
                              })
                            }
                            getOptionLabel={(option) => option.toString()} // Display the option as a string
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="You want decoration"
                                variant="standard"
                                sx={{
                                  background: "#f4f5f4",
                                  borderRadius: 50,
                                  padding: 2,
                                }}
                              />
                            )}
                          />
                        </Grid> */}
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
                              Total Cost: {amount}
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
                            className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft"
                            sx={{
                              mt: 5,
                              borderRadius: 50,
                              padding: 2,
                              marginRight: 2,
                              backgroundColor: "#ffc107",
                            }}
                            fullWidth
                          >
                            {loading && (
                              <CircularProgress
                                sx={{ height: "15%" }}
                                color="secondary"
                              />
                            )}
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
                    onChange={(e) => {
                      setOTP(e.target.value);
                    }}
                    placeholder="XXXXXX"
                    sx={{
                      background: "#f4f5f4",
                      borderRadius: 50,
                      padding: 1,
                      paddingLeft: 2,
                      latterSpacing: 10,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                    inputProps={{
                      maxLength: 4,
                      style: { letterSpacing: 20, textAlign: "center" },
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
                    <CircularProgress
                      sx={{ height: "15%" }}
                      color="secondary"
                    />
                  )}
                  Verify Otp
                </Button>
              </Grid>
            </Card>
          </div>
        ) : (
          <></>
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
            <Link to={"/decoration"}>
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
                <Grid item xs={12}>
                  <Typography
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    1. Couples under 18 years of age are not allowed to book the
                    theatre
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    2. We do NOT provide any movie/OTT accounts. We will do the
                    setup using your OTT accounts/downloaded content.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    3. Smoking/Drinking is NOT allowed inside the theater.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    4. Any DAMAGE caused to theater, including decorative
                    materials like balloons, lights etc will have to be
                    reimbursed.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    5. Guests are requested to maintain CLEANLINESS inside the
                    theater
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
              <br />

              <Button
                onClick={handlePayment}
                variant="contained"
                color="primary"
              >
                Book Bow
              </Button>
            </Grid>
          </Card>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DecorationDetails;
