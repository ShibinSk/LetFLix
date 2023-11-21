import React from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Grid } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Navbar />
        <br />
        <br />
    <div>
      <div className="container">
      <div className="row">
        {/* <h1></h1> */}
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} container spacing={2}>
          <h1>Contact Us</h1>
        </Grid>
      </div>
      <div className="row">
        <h1 style={{ textAlign: 'center' }}>We'd love to hear from you!</h1>
      </div>
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input type="text" required />
            <label>Name</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input type="text" required />
            <label>Email</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{ float: 'right' }}>
            <input type="text" required />
            <label>Phone Number</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn">Send Message</div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
