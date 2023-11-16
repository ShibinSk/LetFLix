import React from "react";
import Navbar from "../../components/NavBar";
import { Container, Grid } from "@mui/material";
import Footer from "../../components/Footer";

const RefundPolicy = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Grid
          display={"flex"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <h1>REFUND POLICY</h1>
        </Grid>

        <br />
        <br />
        <br />
        <br />
        <p>
          We collect an advance amount of Rs 650 for reservation of a slot of
          our theater. This advance amount is fully refundable (except
          convenience charges of payment gateway, if any) if we are informed
          about booking cancellation at least 72 hours before the booking
          through WhatsApp chat. Refund is usually initiated within 24 hours and
          takes maximum 5-7 days to be completed
        </p>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default RefundPolicy;
