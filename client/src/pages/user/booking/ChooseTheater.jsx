import React, { useState } from "react";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const ChooseTheater = () => {
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
      title: "Lizard 2",
      description: "0 slots available on 24/10/2023.",
      image: "/2023-09-26.jpg",
    },
    {
      title: "Lizard 3",
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
                  <h1 className="display-5 mb-5">
                  Choose Your Theatre
                  </h1>
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
                    <button
                    // type="submit"
                    // className="btn btn-primary px-5 py-3 rounded-pill"
                    >
                      {/* Submit Now */}
                    </button>
                    <Grid container spacing={2}>
                      {cardsData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="140"
                                image={card.image}
                                alt={card.title}
                              />
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  {card.title}
                                </Typography>
                                <Typography
                                  sx={{ fontSize: "15px" }}
                                  variant="h6"
                                  color="text.secondary"
                                >
                                  {card.description}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      ))}
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
