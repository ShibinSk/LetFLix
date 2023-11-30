import React from "react";
import Navbar from "../../components/NavBar";
import { Container, Grid, Typography } from "@mui/material";
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
          <Typography component={"h3"}>Booking Advance</Typography>
          {/* <br /> */}
          <p>
            {" "}
            To secure your slot, we require a 50% advance payment for regular
            time slots and 100% payment for midnight slots, serving as a
            deposit.
          </p>
          <br />
          {/* <br /> */}
          <Typography component={"h3"}>
            Cancellation and Refund Policy:
          </Typography>
          At letzFlix Micro Theatres, we understand plans change and strive to
          be most flexible in the industry. We're happy to cancel and refund
          your payment (excluding any convenience charges imposed by payment
          gateway service providers), or assist with rescheduling any number of
          times. You can also transfer your booking to a friend. Please notify
          us at least 6 hours before your scheduled booking's start time to make
          these changes. However, for ordered add-ons (cakes, bouquets, fog
          entry, etc), cancellations must be made 48 hours to your booking’s
          start time prior to be eligible for a refund on these items.
          <br />
          <p>
            Initiate the cancellation process by reaching out to us on WhatsApp
            using this link:
            <a href="https://bit.ly/Whatsapp_letzFlix ">
              https://bit.ly/Whatsapp_letzFlix{" "}
            </a>{" "}
          </p>
        </p>
        <Typography component={"h3"}>Refund Timeline:</Typography>
        Refunds are promptly initiated within 48 hours of receiving your
        cancellation request. While we aim for efficiency, please allow 5-7 days
        for the refund to reflect in your account due to standard processing
        times.
        <br />
        <br />
        <p>
          We appreciate your understanding and look forward to providing you
          with an exceptional experience at letzFlix Micro
          Theatres. See you soon!
        </p>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default RefundPolicy;
