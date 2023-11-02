import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowBack as ArrowBackIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import BookingService from "./BookingService";

function DecorationDetails() {
  const [checkBok, setCheckBox] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCake, setSelecteCake] = useState(null);
  const [price, setPrice] = useState("1000");
  const [key, setKey]=useState(null)
  const [step, setStep] = useState("0");
  const [order, setOrder] = useState("0");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleCakeSelect = (option) => {
    setSelecteCake(option);
  };
  console.log(selectedCake);
  
  console.log(selectedOption);

  const checkOutHandle = async ()=>{
    console.log("oo");
    BookingService.key().then((res)=>{
      setKey(res.data)
      console.log(res,'res');
    })
    BookingService.checkout(price).then((res)=>{
      console.log(res,'res');
      setOrder(res.data)
console.log(window);
      const options ={
        key,
        amount:order.order.amount,
        currency:"INR",
        name:"LetzFlix",
        description:"Razorpay ",
        // image:"https://avatars.githubusercontent.com/u/96648429?s=96&v=4",
        order_id:order.order.id,
        callback_url:"http://localhost:5173//verifypayment",
        prefill:{
          name:"Shibin",
          email:"anandguptasir@gmail.com",
          contact:"1234567890"
        },
        notes:{
          "address":"razorapy official"
        },
        theme:{
          "color":"#3399cc"
        }
      };
      const razor = new window.Razorpay(options);
      razor.open();
  
    })

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
              <Grid container alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}>
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
              <br />

              <Button
              onClick={()=>setStep('2')}
              
              variant="contained" color="primary">
                Next
              </Button>
            </Grid>
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
            <Container>
             
            </Container>

            <Box sx={{ ml: 8, mr: 8, mt: 2 }}></Box>

            <Grid
              alignContent={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <br />

              <Button 
              onClick={checkOutHandle}
               variant="contained" color="primary">
                 
                Book Bow
              </Button>
            </Grid>
          </Card>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DecorationDetails;
