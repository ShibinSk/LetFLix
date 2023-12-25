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
import SimpleImageSlider from "react-simple-image-slider";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { amountContext } from "../../../common/ContextApi.jsx";
const images = [
  // { url: "/r1.png" },
  { url: "/img1.JPG" },
  { url: "/img1.JPG" },
  { url: "/img1.JPG" },
  // { url: "T1/img3.jpg" },
  // { url: "T1/img4.jpg" },
  // { url: "T1/img5.jpg" },
  // { url: "T1/img6.jpg" },
];
const ChooseTheater = () => {
  const { amount, setAmount } = useContext(amountContext);
  const { tName, setTname } = useContext(amountContext);
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
  const { evType, setEvType } = useContext(amountContext);
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

  // const T1Head = ` Theatre MAX`;

  // const T2Head = ` Theatre LaLaLand`;
  return (
    <div>
      <Navbar />
      {evType}
      <div className="container-fluid  py-6 my-6 mt-0">
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
                src="/img2.JPG"
                className="img-fluid h-100 w-100 rounded-start"
                style={{ objectFit: "cover", opacity: 0.7 }}
                alt=""
              />
            </div>

            <div className="col-10">
              <div className="border-bottom border-top border-primary  py-5 px-4">
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
                <div className="text-center">
                  {/* <small className="d-inline-block fw-bold text-dark text-uppercase  border border-primary rounded-pill px-4 py-1 mb-3">
                    Choose Us
                  </small> */}
                  {/* <h1 className="display-5 mb-5">Choose Your Theatre</h1> */}
                </div>
                <div className="row g-4 form">
                  <div className="col-lg-4 col-md-6"></div>

                  <div className="col-12 text-center">
                    <Grid container spacing={2} justifyContent="center">
                      {evType == "BirthDay" ||
                      evType == "Anniversary" ||
                      evType == "MovieMarathon" ? (
                        <>
                          <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 360, height: "130vh" }}>
                              {/* <Typography
                                variant={"h5"}
                                sx={{ color: "#d4a762" }}
                              >
                                
                              </Typography> */}
                              <Box
                                // bgcolor="linear-gradient(45deg, #ffcc00 30%, #ffcc00 90%)"
                                color="#ffcc00"
                                p={1}
                                borderRadius={4}
                                boxShadow={3}
                                width={"100%"}
                                backgroundColor="#ffcc00"
                              >
                                <Typography variant="h6">
                                  Theatre Max
                                </Typography>
                              </Box>
                              <br />
                              <CardActionArea>
                                {/* <CardMedia
                                component="img"
                                height="225"
                                image="/_MG_7231.JPG"
                                alt="green iguana"
                              /> */}
                                {/* <Link to={'/T2Gallery'}> */}
                                <Grid sm={12} md={6} lg={4}>
                                  <Box></Box>
                                  <SimpleImageSlider
                                    width={"100%"}
                                    height={"70vh"}
                                    images={images}
                                    // style={{ borderRadius: '90px' }}
                                    // showBullets={true}
                                    showNavs={true}
                                    navSize={25}

                                    // autoPlay={true}
                                    // autoPlayDelay={1}
                                    // onClick={() => {}}
                                  />
                                </Grid>

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
                                    ₹ 1900 for 4 people & 2.5hrs with decor
                                    <br />
                                    ₹ 200 each for additional guests 4
                                    <br />
                                    Max capacity: 8 person
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
                                  <Box
                                    sx={{ width: "100px", marginLeft: "35%" }}
                                  >
                                    <FormControl fullWidth>
                                      {/* <InputLabel>Peoples</InputLabel> */}

                                      <PeopleIcon sx={{ paddingLeft: "3px" }} />
                                      <Select
                                        value={ppl}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{
                                          "aria-label": "Without label",
                                        }}
                                      >
                                        <MenuItem value="">
                                          <em>Select</em>
                                        </MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Box>
                                  <br />
                                  <Typography>Price : ₹ {amount}</Typography>

                                  <BottomNavigation
                                    showLabels
                                    value={0}
                                    style={{
                                      backgroundColor: "transparent",
                                      paddingTop: "10px",
                                    }}
                                  >
                                    <Link to={`/checkSlot`}>
                                      <BottomNavigationAction
                                        // label="Check Slot"
                                        icon={
                                          // <Link >
                                          <Button
                                            variant="contained"
                                            color="primary" // Set the color you desire
                                            // component={Link}
                                            // to="/checkSlot"
                                            sx={{ backgroundColor: "#ffcc00" }}
                                            className="btn btn-primary border-0 rounded-pill py-1 px-3 px-md-2 animated bounceInLeft"
                                            style={{ height: "93%" }}
                                            onClick={() => {
                                              setAmount(1900);
                                              setTname("Theatre Max");
                                            }}
                                          >
                                            Check Slot
                                          </Button>
                                        }
                                      />
                                    </Link>
                                  </BottomNavigation>
                                </Grid>
                              </CardActions>
                            </Card>
                          </Grid>

                          <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345, height: "130vh" }}>
                              {/* <Typography
                                variant={"h5"}
                                sx={{ color: "#d4a762" }}
                              >
                                {" "}
                                Theatre LaLaLand
                              </Typography> */}
                              <Box
                                // bgcolor="linear-gradient(45deg, #ffcc00 30%, #ffcc00 90%)"
                                color="#ffcc00"
                                p={1}
                                borderRadius={4}
                                boxShadow={3}
                                width={"100%"}
                                backgroundColor="#ffcc00"
                              >
                                <Typography variant="h6">Theatre La La Land</Typography>
                              </Box>
                              <br />
                              <CardActionArea>
                                {/* <Link to="/T2Gallery">
                              <CardMedia
                                component="img"
                                // height="auto"
                                height="225"
                                image="/_MG_7884 (1).JPG"
                                alt="green iguana"
                              />
                            </Link> */}
                                <SimpleImageSlider
                                  width={"100%"}
                                  height={"70vh"}
                                  images={images}
                                  // showBullets={true}
                                  showNavs={true}
                                  navSize={25}
                                  // showNavs={true}
                                  // autoPlay={true}
                                  // autoPlayDelay={1}
                                />
                                <CardContent>
                                  <Typography
                                    variant="h6"
                                    sx={{ fontSize: "15px" }}
                                    color="text.primary"
                                  >
                                    ₹ 1800 with Fairytale Theme Decor
                                    <br />
                                    Max capacity: 2 person
                                  </Typography>
                                  <br />
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
                              <br />
                              {/* <br /> */}
                              <PeopleIcon sx={{ paddingLeft: "3px" }} />
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
                                2 Person
                                <br />
                                only
                              </Typography>

                              <br />
                              <Typography>Price : ₹ 1800</Typography>
                              {/* <CardActions> */}
                              <Grid item xs={12} sm={6} md={12}>
                                <BottomNavigation
                                  showLabels
                                  value={0}
                                  style={{
                                    backgroundColor: "transparent",
                                    paddingTop: "15px",
                                  }}
                                >
                                  <BottomNavigationAction
                                    // label="Check Slot"
                                    icon={
                                      // <Link  >
                                      <Link to={`/checkSlot`}>
                                        <Button
                                          onClick={() => {
                                            setAmount(1800);
                                            setTname(" Theatre La La Land");
                                          }}
                                          className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-2 animated bounceInLeft"
                                          style={{ height: "60%" }}
                                          variant="contained"
                                          sx={{ backgroundColor: "#ffcc00" }}
                                          color="primary" // Set the color you desire
                                          // component={Link}
                                          // // to={{
                                          // //   pathname: '/checkSlot',
                                          // //   state: { isNaN: 'Hello from the button!' }
                                          // // }}
                                          // to="/checkSlot"
                                        >
                                          Check Slot
                                        </Button>
                                      </Link>
                                    }
                                  />
                                  <br />
                                </BottomNavigation>
                              </Grid>
                              {/* </CardActions> */}
                            </Card>
                          </Grid>
                        </>
                      ) : evType == "proposal" ? (
                        <>
                          <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345, height: "79vh" }}>
                              <Box
                                // bgcolor="linear-gradient(45deg, #ffcc00 30%, #ffcc00 90%)"
                                color="#ffcc00"
                                p={1}
                                borderRadius={4}
                                boxShadow={3}
                                width={"100%"}
                                backgroundColor="#ffcc00"
                              >
                                <Typography variant="h6">
                                  Theatre LaLaLand
                                </Typography>
                              </Box>
                              <br />
                              <CardActionArea>
                                {/* <Link to="/T2Gallery">
                              <CardMedia
                                component="img"
                                // height="auto"
                                height="225"
                                image="/_MG_7884 (1).JPG"
                                alt="green iguana"
                              />
                            </Link> */}
                                <SimpleImageSlider
                                  width={"100%"}
                                  height={220}
                                  images={images}
                                  showBullets={true}
                                  // showNavs={true}
                                  // autoPlay={true}
                                  // autoPlayDelay={1}
                                />
                                <CardContent>
                                  <Typography
                                    variant="h6"
                                    sx={{ fontSize: "15px" }}
                                    color="text.primary"
                                  >
                                    ₹ 1800 with Fairytale Theme Decor
                                    <br />
                                    Max capacity: 2 person
                                  </Typography>
                                  <br />
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
                              <br />
                              {/* <br /> */}
                              <PeopleIcon sx={{ paddingLeft: "3px" }} />
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
                                2 Person
                                <br />
                                only
                              </Typography>

                              <br />
                              <Typography>Price : ₹ 1800</Typography>
                              {/* <CardActions> */}
                              <Grid item xs={12} sm={6} md={12}>
                                <BottomNavigation
                                  showLabels
                                  value={0}
                                  style={{
                                    backgroundColor: "transparent",
                                    paddingTop: "15px",
                                  }}
                                >
                                  <BottomNavigationAction
                                    // label="Check Slot"
                                    icon={
                                      // <Link  >
                                      <Link to={`/checkSlot`}>
                                        <Button
                                          onClick={() => {
                                            setAmount(1800);
                                            setTname("Theatre LaLaLand");
                                          }}
                                          className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-2 animated bounceInLeft"
                                          style={{ height: "60%" }}
                                          variant="contained"
                                          sx={{ backgroundColor: "#ffcc00" }}
                                          color="primary" // Set the color you desire
                                          // component={Link}
                                          // // to={{
                                          // //   pathname: '/checkSlot',
                                          // //   state: { isNaN: 'Hello from the button!' }
                                          // // }}
                                          // to="/checkSlot"
                                        >
                                          Check Slot
                                        </Button>
                                      </Link>
                                    }
                                  />
                                  <br />
                                </BottomNavigation>
                              </Grid>
                              {/* </CardActions> */}
                            </Card>
                          </Grid>
                        </>
                      ) : (
                        <>
                          <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345, height: "130vh" }}>
                              <Box
                                // bgcolor="linear-gradient(45deg, #ffcc00 30%, #ffcc00 90%)"
                                color="#ffcc00"
                                p={1}
                                borderRadius={4}
                                boxShadow={3}
                                width={"100%"}
                                backgroundColor="#ffcc00"
                              >
                                <Typography variant="h6">
                                  Theatre Max
                                </Typography>
                              </Box>
                              <br />
                              <CardActionArea>
                                {/* <CardMedia
                                component="img"
                                height="225"
                                image="/_MG_7231.JPG"
                                alt="green iguana"
                              /> */}
                                {/* <Link to={'/T2Gallery'}> */}
                                <Grid sm={12} md={6} lg={4}>
                                  <SimpleImageSlider
                                    width={"100%"}
                                    height={"70vh"}
                                    images={images}
                                    // showBullets={true}
                                    navSize={25}
                                    showNavs={true}
                                    // autoPlay={true}
                                    // autoPlayDelay={1}
                                    // onClick={() => {}}
                                  />
                                </Grid>

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
                                    ₹ 1900 for 4 people & 2.5hrs with decor
                                    <br />
                                    ₹ 200 each for additional guests 4
                                    <br />
                                    Max capacity: 8 person
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
                                  <Box
                                    sx={{ width: "100px", marginLeft: "35%" }}
                                  >
                                    <FormControl fullWidth>
                                      {/* <InputLabel>Peoples</InputLabel> */}

                                      <PeopleIcon sx={{ paddingLeft: "3px" }} />
                                      <Select
                                        value={ppl}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{
                                          "aria-label": "Without label",
                                        }}
                                      >
                                        <MenuItem value="">
                                          <em>Select</em>
                                        </MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Box>
                                  <br />
                                  <Typography>Price : ₹ {amount}</Typography>

                                  <BottomNavigation
                                    showLabels
                                    value={0}
                                    style={{
                                      backgroundColor: "transparent",
                                      paddingTop: "10px",
                                    }}
                                  >
                                    <Link to={`/checkSlot`}>
                                      <BottomNavigationAction
                                        // label="Check Slot"
                                        icon={
                                          // <Link >
                                          <Button
                                            variant="contained"
                                            color="primary" // Set the color you desire
                                            // component={Link}
                                            // to="/checkSlot"
                                            sx={{ backgroundColor: "#ffcc00" }}
                                            className="btn btn-primary border-0 rounded-pill py-1 px-3 px-md-2 animated bounceInLeft"
                                            style={{ height: "93%" }}
                                            onClick={() => {
                                              setAmount(1800);
                                              setTname("Theatre Max");
                                            }}
                                          >
                                            Check Slot
                                          </Button>
                                        }
                                      />
                                    </Link>
                                  </BottomNavigation>
                                </Grid>
                              </CardActions>
                            </Card>
                          </Grid>
                        </>
                      )}
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              <img
                src="/img2.JPG"
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
